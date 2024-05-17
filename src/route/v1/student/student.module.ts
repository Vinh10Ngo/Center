import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { Student, StudentSchema } from './schemas/student.schema';
import { StudentRepository } from './student.repository';
import { BaseModulesService } from 'src/route/baseModule/baseModule.service';
import { BaseModulesModule } from 'src/route/baseModule/baseModule.module';




@Module({
  imports: [
    BaseModulesModule,
    MongooseModule.forRoot('mongodb+srv://project-nodejs:phucvinh123456@cluster0.1r1zsfn.mongodb.net/Center?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }]),
  ],
  controllers: [StudentController],
  providers: [StudentService, StudentRepository],
  exports:[StudentService, StudentRepository]
})  
export class StudentModule {}
