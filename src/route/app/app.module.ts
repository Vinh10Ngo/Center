import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from '../v1/student/student.module';
import { ParentModule } from '../v1/parent/parent.module';
import { CourseModule } from '../v1/course/course.module';
import { ExpenditureModule } from '../v1/expenditure/expenditure.module';
import { RevenueModule } from '../v1/revenue/revenue.module';
import { ClassInCourseModule } from '../v1/classInCourse/classInCourse.module';
import { CenterModule } from '../v1/center/center.module';
import { SchoolModule } from '../v1/school/school.module';
import { UploadModule } from '../core/upload/upload.module';

@Module({
  imports: [UploadModule, StudentModule, ParentModule, CourseModule, ExpenditureModule, RevenueModule,ClassInCourseModule, CenterModule, SchoolModule],
    controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
