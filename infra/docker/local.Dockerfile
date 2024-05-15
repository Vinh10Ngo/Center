FROM tekupsolution/node18ubuntunginx:latest AS development

WORKDIR /home/app

# COPY package*.json *-lock.yaml ./

# RUN ls -liahS \
#   && pnpm config set auto-install-peers true \
#   && pnpm config set strict-peer-dependencies false \
#   && pnpm i

# CMD ["pnpm", "run", "start:dev"]
ENTRYPOINT ["tail", "-f", "/dev/null"]
