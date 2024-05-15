import { Test, TestingModule } from '@nestjs/testing';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';

describe('coursesController', () => {
  let coursesController: CourseController;

  beforeEach(async () => {
    const courses: TestingModule = await Test.createTestingModule({
      controllers: [CourseController],
      providers: [CourseService],
    }).compile();

    coursesController = courses.get<CourseController>(CourseController);
  });
});
