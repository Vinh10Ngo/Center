import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Revenue, RevenueDocument } from './schemas/revenue.schema';

@Injectable()
export class RevenueRepository {
  constructor(@InjectModel(Revenue.name) private revenueModel: Model<RevenueDocument>) {}


  async create(revenue: Revenue): Promise<RevenueDocument> {
    const newRevenue = new this.revenueModel(revenue);
    return newRevenue.save();
  }

  async update(revenueId: string, updateData: Partial<Revenue>): Promise<RevenueDocument | null> {
    return this.revenueModel.findByIdAndUpdate(revenueId, updateData, { new: true }).exec();
  }

  async delete(revenueId: string): Promise<RevenueDocument | null> {
    return this.revenueModel.findByIdAndDelete(revenueId).exec();
  }

  async findAll(): Promise<RevenueDocument[]> {
    return this.revenueModel.find().populate(['studentId', 'classId']).exec();
  }

  async findById(revenueId: string): Promise<RevenueDocument | null> {
    return this.revenueModel.findById(revenueId).exec();
  }
}
