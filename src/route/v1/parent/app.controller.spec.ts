import { Test, TestingModule } from '@nestjs/testing';
import { ParentController } from './parent.controller';
import { ParentService } from './parent.service';

describe('parentsController', () => {
  let parentsController: ParentController;

  beforeEach(async () => {
    const parents: TestingModule = await Test.createTestingModule({
      controllers: [ParentController],
      providers: [ParentService],
    }).compile();

    parentsController = parents.get<ParentController>(ParentController);
  });
});
