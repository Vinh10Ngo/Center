import { Injectable } from '@nestjs/common';
import { ParentRepository } from './parent.repository';
import { Parent, ParentDocument } from './schemas/parent.schema';


@Injectable()
export class ParentService {
  constructor(private readonly parentRepository: ParentRepository) {}

  async findAll(): Promise<ParentDocument[]> {
    return this.parentRepository.findAll();
  }

  async findById(parentId: string): Promise<ParentDocument | null> {
    return this.parentRepository.findById(parentId);
  }

  async create(parent: Parent): Promise<ParentDocument> {
    return this.parentRepository.create(parent);
  }

  async update(parentId: string, updateData: Partial<Parent>): Promise<ParentDocument | null> {
    return this.parentRepository.update(parentId, updateData);
  }

  async delete(parentId: string): Promise<ParentDocument | null> {
    return this.parentRepository.delete(parentId);
  }
 
}
