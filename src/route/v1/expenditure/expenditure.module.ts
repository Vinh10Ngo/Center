import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ExpenditureController } from './expenditure.controller';
import { ExpenditureService } from './expenditure.service';
import { Expenditure, ExpenditureSchema } from './schemas/expenditure.schema';
import { ExpenditureRepository } from './expenditure.repository';




@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://project-nodejs:phucvinh123456@cluster0.1r1zsfn.mongodb.net/Center?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{ name: Expenditure.name, schema: ExpenditureSchema }]),
  ],
  controllers: [ExpenditureController],
  providers: [ExpenditureService, ExpenditureRepository],
  exports:[ExpenditureService, ExpenditureRepository]
})  
export class ExpenditureModule {}
