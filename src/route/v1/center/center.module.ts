import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CenterController } from './center.controller';
import { CenterService } from './center.service';
import { Center, CenterSchema } from './schemas/center.schema';
import { CenterRepository } from './center.repository';




@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://project-nodejs:phucvinh123456@cluster0.1r1zsfn.mongodb.net/Center?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{ name: Center.name, schema: CenterSchema }]),
  ],
  controllers: [CenterController],
  providers: [CenterService, CenterRepository],
  exports:[CenterService, CenterRepository]
})  
export class CenterModule {}
