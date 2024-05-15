FROM tekupsolution/node18ubuntunginx:latest AS builder

WORKDIR /home/app

COPY . .

RUN ls -liahS

RUN pnpm config set auto-install-peers true \
  && pnpm config set strict-peer-dependencies false \
  && pnpm i \
  && du -sh node_modules 

RUN pnpm run build

FROM tekupsolution/node18ubuntunginx:latest AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
ENV HUSKY=0

WORKDIR /home/app

COPY ecosystem.config.js package.json .env.prod ./
COPY ./public ./public

COPY --from=builder /home/app/dist ./dist
COPY infra/docker/nginx.conf /etc/nginx/conf.d/default.conf

RUN pnpm config set auto-install-peers true \
  && npm pkg delete scripts.prepare \
  && pnpm config set strict-peer-dependencies false \
  && pnpm config set dedupe-peer-dependents=true \
  && pnpm i --only=production \
  && rm -rf /etc/nginx/sites-enabled/default \
  && mv .env.prod .env \
  && rm -rf ./public/upload/tmp/* \
  && rm -rf ./public/upload/file/* \
  && rm -rf ./public/upload/image/* \
  && chmod -R 777 ./public/upload/*
  #  \
  # && du -sh node_modules \
  # && curl -sf https://gobinaries.com/tj/node-prune | /bin/sh && \
  #   node-prune \
  # && du -sh node_modules \
  # && pnpm prune --production \
  # && du -sh node_modules

# Install Google Chrome Stable and fonts
# Note: this installs the necessary libs to make the browser work with Puppeteer.
RUN apt-get update && apt-get install gnupg wget -y && \
  wget --quiet --output-document=- https://dl-ssl.google.com/linux/linux_signing_key.pub | gpg --dearmor > /etc/apt/trusted.gpg.d/google-archive.gpg && \
  sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' && \
  apt-get update && \
  apt-get install google-chrome-stable -y --no-install-recommends && \
  rm -rf /var/lib/apt/lists/*

