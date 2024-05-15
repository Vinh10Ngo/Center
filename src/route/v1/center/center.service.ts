import { Injectable } from '@nestjs/common';
import { CenterRepository } from './center.repository';
import { Center, CenterDocument } from './schemas/center.schema';


@Injectable()
export class CenterService {
  constructor(private readonly centerRepository: CenterRepository) {}

  async findAll(): Promise<CenterDocument[]> {
    return this.centerRepository.findAll();
  }

  async findById(centerId: string): Promise<CenterDocument | null> {
    return this.centerRepository.findById(centerId);
  }

  async create(center: Center): Promise<CenterDocument> {
    return this.centerRepository.create(center);
  }

  async update(centerId: string, updateData: Partial<Center>): Promise<CenterDocument | null> {
    return this.centerRepository.update(centerId, updateData);
  }

  async delete(centerId: string): Promise<CenterDocument | null> {
    return this.centerRepository.delete(centerId);
  }
 
}
