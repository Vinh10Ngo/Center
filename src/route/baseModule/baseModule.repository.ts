import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseModule, BaseModuleDocument } from './schemas/baseModule.schema';

@Injectable()
export class BaseModulesRepository {
  constructor(@InjectModel(BaseModule.name) private baseModuleModel: Model<BaseModuleDocument>) {}


  async create(baseModule: BaseModule): Promise<BaseModuleDocument> {
    const newBaseModule = new this.baseModuleModel(baseModule);
    return newBaseModule.save();
  }

  async update(baseModuleId: string, updateData: Partial<BaseModule>): Promise<BaseModuleDocument | null> {
    return this.baseModuleModel.findByIdAndUpdate(baseModuleId, updateData, { new: true }).exec();
  }

  async delete(baseModuleId: string): Promise<BaseModuleDocument | null> {
    return this.baseModuleModel.findByIdAndDelete(baseModuleId).exec();
  }

  async findAll(): Promise<BaseModuleDocument[]> {
    return this.baseModuleModel.find().exec();
  }

  async findById(baseModuleId: string): Promise<BaseModuleDocument | null> {
    return this.baseModuleModel.findById(baseModuleId).exec();
  }
}
