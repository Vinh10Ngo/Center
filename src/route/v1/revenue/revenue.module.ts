import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RevenueController } from './revenue.controller';
import { RevenueService } from './revenue.service';
import { Revenue, RevenueSchema } from './schemas/revenue.schema';
import { RevenueRepository } from './revenue.repository';




@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://project-nodejs:phucvinh123456@cluster0.1r1zsfn.mongodb.net/Center?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{ name: Revenue.name, schema: RevenueSchema }]),
  ],
  controllers: [RevenueController],
  providers: [RevenueService, RevenueRepository],
  exports:[RevenueService, RevenueRepository]
})  
export class RevenueModule {}
