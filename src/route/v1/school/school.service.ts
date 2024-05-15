import { Injectable } from '@nestjs/common';
import { SchoolRepository } from './school.repository';
import { School, SchoolDocument } from './schemas/school.schema';


@Injectable()
export class SchoolService {
  constructor(private readonly schoolRepository: SchoolRepository) {}

  async findAll(): Promise<SchoolDocument[]> {
    return this.schoolRepository.findAll();
  }

  async findById(schoolId: string): Promise<SchoolDocument | null> {
    return this.schoolRepository.findById(schoolId);
  }

  async create(school: School): Promise<SchoolDocument> {
    return this.schoolRepository.create(school);
  }

  async update(schoolId: string, updateData: Partial<School>): Promise<SchoolDocument | null> {
    return this.schoolRepository.update(schoolId, updateData);
  }

  async delete(schoolId: string): Promise<SchoolDocument | null> {
    return this.schoolRepository.delete(schoolId);
  }
 
}
