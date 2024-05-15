import { Injectable } from '@nestjs/common';
import { RevenueRepository } from './revenue.repository';
import { Revenue, RevenueDocument } from './schemas/revenue.schema';


@Injectable()
export class RevenueService {
  constructor(private readonly revenueRepository: RevenueRepository) {}

  async findAll(): Promise<RevenueDocument[]> {
    return this.revenueRepository.findAll();
  }

  async findById(revenueId: string): Promise<RevenueDocument | null> {
    return this.revenueRepository.findById(revenueId);
  }

  async create(revenue: Revenue): Promise<RevenueDocument> {
    return this.revenueRepository.create(revenue);
  }

  async update(revenueId: string, updateData: Partial<Revenue>): Promise<RevenueDocument | null> {
    return this.revenueRepository.update(revenueId, updateData);
  }

  async delete(revenueId: string): Promise<RevenueDocument | null> {
    return this.revenueRepository.delete(revenueId);
  }
 
}
