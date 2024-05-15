import { Test, TestingModule } from '@nestjs/testing';
import { BaseModulesController } from './baseModule.controller';
import { BaseModulesService } from './baseModule.service';

describe('baseModulesController', () => {
  let baseModulesController: BaseModulesController;

  beforeEach(async () => {
    const baseModules: TestingModule = await Test.createTestingModule({
      controllers: [BaseModulesController],
      providers: [BaseModulesService],
    }).compile();

    baseModulesController = baseModules.get<BaseModulesController>(BaseModulesController);
  });
});
