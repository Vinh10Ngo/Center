import { Injectable } from '@nestjs/common';
import { BaseModulesRepository } from './baseModule.repository';
import { BaseModule, BaseModuleDocument } from './schemas/baseModule.schema';


@Injectable()
export class BaseModulesService {
  constructor(private readonly baseModulesRepository: BaseModulesRepository) {}

  async findAll(): Promise<BaseModuleDocument[]> {
    return this.baseModulesRepository.findAll();
  }

  async findById(baseModuleId: string): Promise<BaseModuleDocument | null> {
    return this.baseModulesRepository.findById(baseModuleId);
  }

  async create(baseModule: BaseModule): Promise<BaseModuleDocument> {
    return this.baseModulesRepository.create(baseModule);
  }

  async update(baseModuleId: string, updateData: Partial<BaseModule>): Promise<BaseModuleDocument | null> {
    return this.baseModulesRepository.update(baseModuleId, updateData);
  }

  async delete(baseModuleId: string): Promise<BaseModuleDocument | null> {
    return this.baseModulesRepository.delete(baseModuleId);
  }
 
}
