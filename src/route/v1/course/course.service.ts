import { Injectable } from '@nestjs/common';
import { CourseRepository } from './course.repository';
import { Course, CourseDocument } from './schemas/course.schema';


@Injectable()
export class CourseService {
  constructor(private readonly courseRepository: CourseRepository) {}

  async findAll(): Promise<CourseDocument[]> {
    return this.courseRepository.findAll();
  }

  async findById(courseId: string): Promise<CourseDocument | null> {
    return this.courseRepository.findById(courseId);
  }

  async create(course: Course): Promise<CourseDocument> {
    return this.courseRepository.create(course);
  }

  async update(courseId: string, updateData: Partial<Course>): Promise<CourseDocument | null> {
    return this.courseRepository.update(courseId, updateData);
  }

  async delete(courseId: string): Promise<CourseDocument | null> {
    return this.courseRepository.delete(courseId);
  }
 
}
