import { Test, TestingModule } from '@nestjs/testing';
import { SchoolController } from './school.controller';
import { SchoolService } from './school.service';

describe('schoolsController', () => {
  let schoolsController: SchoolController;

  beforeEach(async () => {
    const schools: TestingModule = await Test.createTestingModule({
      controllers: [SchoolController],
      providers: [SchoolService],
    }).compile();

    schoolsController = schools.get<SchoolController>(SchoolController);
  });
});
