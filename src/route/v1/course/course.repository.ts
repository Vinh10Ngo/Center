import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Course, CourseDocument } from './schemas/course.schema';

@Injectable()
export class CourseRepository {
  constructor(@InjectModel(Course.name) private courseModel: Model<CourseDocument>) {}


  async create(course: Course): Promise<CourseDocument> {
    const newCourse = new this.courseModel(course);
    return newCourse.save();
  }

  async update(courseId: string, updateData: Partial<Course>): Promise<CourseDocument | null> {
    return this.courseModel.findByIdAndUpdate(courseId, updateData, { new: true }).exec();
  }

  async delete(courseId: string): Promise<CourseDocument | null> {
    return this.courseModel.findByIdAndDelete(courseId).exec();
  }

  async findAll(): Promise<CourseDocument[]> {
    return this.courseModel.find().populate(['studentId', 'schoolId', 'centerId']).exec();
  }

  async findById(courseId: string): Promise<CourseDocument | null> {
    return this.courseModel.findById(courseId).exec();
  }
}
