import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Expenditure, ExpenditureDocument } from './schemas/expenditure.schema';
import { ParamsService } from 'src/helpers/params';

@Injectable()
export class ExpenditureRepository {
  constructor(@InjectModel(Expenditure.name) private expenditureModel: Model<ExpenditureDocument>, private readonly paramsService: ParamsService) {}


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

  async findAll(params): Promise<ExpenditureDocument[]> {
    const obj = await this.paramsService.listItems(params)
    return this.expenditureModel.find(obj.find).select(obj.select).sort(obj.sort).exec();
  }

  async findById(expenditureId: string): Promise<ExpenditureDocument | null> {
    return this.expenditureModel.findById(expenditureId).exec();
  }
}
