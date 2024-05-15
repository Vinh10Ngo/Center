import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Parent, ParentDocument } from './schemas/parent.schema';

@Injectable()
export class ParentRepository {
  constructor(@InjectModel(Parent.name) private parentModel: Model<ParentDocument>) {}


  async create(parent: Parent): Promise<ParentDocument> {
    const newParent = new this.parentModel(parent);
    return newParent.save();
  }

  async update(parentId: string, updateData: Partial<Parent>): Promise<ParentDocument | null> {
    return this.parentModel.findByIdAndUpdate(parentId, updateData, { new: true }).exec();
  }

  async delete(parentId: string): Promise<ParentDocument | null> {
    return this.parentModel.findByIdAndDelete(parentId).exec();
  }

  async findAll(): Promise<ParentDocument[]> {
    return this.parentModel.find().populate('student').exec();
  }

  async findById(parentId: string): Promise<ParentDocument | null> {
    return this.parentModel.findById(parentId).exec();
  }
}
