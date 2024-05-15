import { Test, TestingModule } from '@nestjs/testing';
import { ClassInCourseController } from './classInCourse.controller';
import { ClassInCourseService } from './classInCourse.service';

describe('classInCoursesController', () => {
  let classInCoursesController: ClassInCourseController;

  beforeEach(async () => {
    const classInCourses: TestingModule = await Test.createTestingModule({
      controllers: [ClassInCourseController],
      providers: [ClassInCourseService],
    }).compile();

    classInCoursesController = classInCourses.get<ClassInCourseController>(ClassInCourseController);
  });
});
