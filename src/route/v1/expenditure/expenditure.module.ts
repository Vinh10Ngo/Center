import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ExpenditureController } from './expenditure.controller';
import { ExpenditureService } from './expenditure.service';
import { Expenditure, ExpenditureSchema } from './schemas/expenditure.schema';
import { ExpenditureRepository } from './expenditure.repository';
import { ParamsService } from 'src/helpers/params';
import { UploadModule } from 'src/route/core/upload/upload.module';
import { UploadService } from '../../core/upload/upload.service'



@Module({
  imports: [
    UploadModule,
    MongooseModule.forRoot('mongodb+srv://project-nodejs:phucvinh123456@cluster0.1r1zsfn.mongodb.net/Center?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{ name: Expenditure.name, schema: ExpenditureSchema }]),
  ],
  controllers: [ExpenditureController],
  providers: [ExpenditureService, ExpenditureRepository, ParamsService, UploadService],
  exports:[ExpenditureService, ExpenditureRepository]
})  
export class ExpenditureModule {}
