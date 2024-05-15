import { Test, TestingModule } from '@nestjs/testing';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';

describe('studentsController', () => {
  let studentsController: StudentController;

  beforeEach(async () => {
    const students: TestingModule = await Test.createTestingModule({
      controllers: [StudentController],
      providers: [StudentService],
    }).compile();

    studentsController = students.get<StudentController>(StudentController);
  });
});
