import { Injectable } from '@nestjs/common';
import { ClassInCourseRepository } from './classInCourse.repository';
import { ClassInCourse, ClassInCourseDocument } from './schemas/classInCourse.schema';


@Injectable()
export class ClassInCourseService {
  constructor(private readonly classInCourseRepository: ClassInCourseRepository) {}

  async findAll(): Promise<ClassInCourseDocument[]> {
    return this.classInCourseRepository.findAll();
  }

  async findById(classInCourseId: string): Promise<ClassInCourseDocument | null> {
    return this.classInCourseRepository.findById(classInCourseId);
  }

  async create(classInCourse: ClassInCourse): Promise<ClassInCourseDocument> {
    return this.classInCourseRepository.create(classInCourse);
  }

  async update(classInCourseId: string, updateData: Partial<ClassInCourse>): Promise<ClassInCourseDocument | null> {
    return this.classInCourseRepository.update(classInCourseId, updateData);
  }

  async delete(classInCourseId: string): Promise<ClassInCourseDocument | null> {
    return this.classInCourseRepository.delete(classInCourseId);
  }
 
}
