import { Test, TestingModule } from '@nestjs/testing';
import { RevenueController } from './revenue.controller';
import { RevenueService } from './revenue.service';

describe('revenuesController', () => {
  let revenuesController: RevenueController;

  beforeEach(async () => {
    const revenues: TestingModule = await Test.createTestingModule({
      controllers: [RevenueController],
      providers: [RevenueService],
    }).compile();

    revenuesController = revenues.get<RevenueController>(RevenueController);
  });
});
