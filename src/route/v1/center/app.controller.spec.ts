import { Test, TestingModule } from '@nestjs/testing';
import { CenterController } from './center.controller';
import { CenterService } from './center.service';

describe('centersController', () => {
  let centersController: CenterController;

  beforeEach(async () => {
    const centers: TestingModule = await Test.createTestingModule({
      controllers: [CenterController],
      providers: [CenterService],
    }).compile();

    centersController = centers.get<CenterController>(CenterController);
  });
});
