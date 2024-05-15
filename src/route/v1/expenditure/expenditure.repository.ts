import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Expenditure, ExpenditureDocument } from './schemas/expenditure.schema';

@Injectable()
export class ExpenditureRepository {
  constructor(@InjectModel(Expenditure.name) private expenditureModel: Model<ExpenditureDocument>) {}


  async create(expenditure: Expenditure): Promise<ExpenditureDocument> {
    const newExpenditure = new this.expenditureModel(expenditure);
    return newExpenditure.save();
  }

  async update(expenditureId: string, updateData: Partial<Expenditure>): Promise<ExpenditureDocument | null> {
    return this.expenditureModel.findByIdAndUpdate(expenditureId, updateData, { new: true }).exec();
  }

  async delete(expenditureId: string): Promise<ExpenditureDocument | null> {
    return this.expenditureModel.findByIdAndDelete(expenditureId).exec();
  }

  async findAll(): Promise<ExpenditureDocument[]> {
    return this.expenditureModel.find().exec();
  }

  async findById(expenditureId: string): Promise<ExpenditureDocument | null> {
    return this.expenditureModel.findById(expenditureId).exec();
  }
}
