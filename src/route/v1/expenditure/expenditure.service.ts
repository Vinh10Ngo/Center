import { Injectable } from '@nestjs/common';
import { ExpenditureRepository } from './expenditure.repository';
import { Expenditure, ExpenditureDocument } from './schemas/expenditure.schema';
import { ParamsService } from 'src/helpers/params';

@Injectable()
export class ExpenditureService {
  constructor(private readonly expenditureRepository: ExpenditureRepository) {}

  async findAll(params): Promise<ExpenditureDocument[]> {
    return this.expenditureRepository.findAll(params);
  }

  async findById(expenditureId: string): Promise<ExpenditureDocument | null> {
    return this.expenditureRepository.findById(expenditureId);
  }

  async create(expenditure: Expenditure): Promise<ExpenditureDocument> {
    return this.expenditureRepository.create(expenditure);
  }

  async update(expenditureId: string, updateData: Partial<Expenditure>): Promise<ExpenditureDocument | null> {
    return this.expenditureRepository.update(expenditureId, updateData);
  }

  async delete(expenditureId: string): Promise<ExpenditureDocument | null> {
    return this.expenditureRepository.delete(expenditureId);
  }
 
}
