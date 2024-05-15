import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SchoolController } from './school.controller';
import { SchoolService } from './school.service';
import { School, SchoolSchema } from './schemas/school.schema';
import { SchoolRepository } from './school.repository';




@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://project-nodejs:phucvinh123456@cluster0.1r1zsfn.mongodb.net/Center?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{ name: School.name, schema: SchoolSchema }]),
  ],
  controllers: [SchoolController],
  providers: [SchoolService, SchoolRepository],
  exports:[SchoolService, SchoolRepository]
})  
export class SchoolModule {}
