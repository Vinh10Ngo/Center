import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClassInCourseController } from './classInCourse.controller';
import { ClassInCourseService } from './classInCourse.service';
import { ClassInCourse, ClassInCourseSchema } from './schemas/classInCourse.schema';
import { ClassInCourseRepository } from './classInCourse.repository';




@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://project-nodejs:phucvinh123456@cluster0.1r1zsfn.mongodb.net/Center?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{ name: ClassInCourse.name, schema: ClassInCourseSchema }]),
  ],
  controllers: [ClassInCourseController],
  providers: [ClassInCourseService, ClassInCourseRepository],
  exports:[ClassInCourseService, ClassInCourseRepository]
})  
export class ClassInCourseModule {}
