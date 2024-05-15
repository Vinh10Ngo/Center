import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { School, SchoolDocument } from './schemas/school.schema';

@Injectable()
export class SchoolRepository {
  constructor(@InjectModel(School.name) private schoolModel: Model<SchoolDocument>) {}


  async create(school: School): Promise<SchoolDocument> {
    const newSchool = new this.schoolModel(school);
    return newSchool.save();
  }

  async update(schoolId: string, updateData: Partial<School>): Promise<SchoolDocument | null> {
    return this.schoolModel.findByIdAndUpdate(schoolId, updateData, { new: true }).exec();
  }

  async delete(schoolId: string): Promise<SchoolDocument | null> {
    return this.schoolModel.findByIdAndDelete(schoolId).exec();
  }

  async findAll(): Promise<SchoolDocument[]> {
    return this.schoolModel.find().populate('studentId').exec();
  }

  async findById(schoolId: string): Promise<SchoolDocument | null> {
    return this.schoolModel.findById(schoolId).exec();
  }
}
