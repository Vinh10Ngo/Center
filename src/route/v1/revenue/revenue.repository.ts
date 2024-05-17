import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Revenue, RevenueDocument } from './schemas/revenue.schema';
import { ParamsService } from 'src/helpers/params';
@Injectable()
export class RevenueRepository {
  constructor(@InjectModel(Revenue.name) private revenueModel: Model<RevenueDocument>, private readonly paramsService: ParamsService) {}


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

  async findAll(query: any): Promise<RevenueDocument[]> {
    const obj = await this.paramsService.listItems(query)
    return this.revenueModel.find().populate(['studentId', 'classId']).exec();
  }

  async findById(revenueId: string): Promise<RevenueDocument | null> {
    return this.revenueModel.findById(revenueId).exec();
  }
}
