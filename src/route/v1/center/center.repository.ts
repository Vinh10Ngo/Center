import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Center, CenterDocument } from './schemas/center.schema';

@Injectable()
export class CenterRepository {
  constructor(@InjectModel(Center.name) private centerModel: Model<CenterDocument>) {}


  async create(center: Center): Promise<CenterDocument> {
    const newCenter = new this.centerModel(center);
    return newCenter.save();
  }

  async update(centerId: string, updateData: Partial<Center>): Promise<CenterDocument | null> {
    return this.centerModel.findByIdAndUpdate(centerId, updateData, { new: true }).exec();
  }

  async delete(centerId: string): Promise<CenterDocument | null> {
    return this.centerModel.findByIdAndDelete(centerId).exec();
  }

  async findAll(): Promise<CenterDocument[]> {
    return this.centerModel.find().populate(['studentId', 'schoolId', 'centerId']).exec();
  }

  async findById(centerId: string): Promise<CenterDocument | null> {
    return this.centerModel.findById(centerId).exec();
  }
}
