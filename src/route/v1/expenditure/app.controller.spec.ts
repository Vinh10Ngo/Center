import { Test, TestingModule } from '@nestjs/testing';
import { ExpenditureController } from './expenditure.controller';
import { ExpenditureService } from './expenditure.service';

describe('parentsController', () => {
  let parentsController: ExpenditureController;

  beforeEach(async () => {
    const parents: TestingModule = await Test.createTestingModule({
      controllers: [ExpenditureController],
      providers: [ExpenditureService],
    }).compile();

    parentsController = parents.get<ExpenditureController>(ExpenditureController);
  });
});
