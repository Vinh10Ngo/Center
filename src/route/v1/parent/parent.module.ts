import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ParentController } from './parent.controller';
import { ParentService } from './parent.service';
import { Parent, ParentSchema } from './schemas/parent.schema';
import { ParentRepository } from './parent.repository';
import { StudentModule } from '../student/student.module';




@Module({
  imports: [
    StudentModule,
    MongooseModule.forRoot('mongodb+srv://project-nodejs:phucvinh123456@cluster0.1r1zsfn.mongodb.net/Center?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{ name: Parent.name, schema: ParentSchema }]),
  ],
  controllers: [ParentController],
  providers: [ParentService, ParentRepository],
  exports:[ParentService, ParentRepository]
})  
export class ParentModule {}
