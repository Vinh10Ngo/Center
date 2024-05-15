import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ClassInCourse, ClassInCourseDocument } from './schemas/classInCourse.schema';

@Injectable()
export class ClassInCourseRepository {
  constructor(@InjectModel(ClassInCourse.name) private classInCourseModel: Model<ClassInCourseDocument>) {}


  async create(classInCourse: ClassInCourse): Promise<ClassInCourseDocument> {
    const newClassInCourse = new this.classInCourseModel(classInCourse);
    return newClassInCourse.save();
  }

  async update(classInCourseId: string, updateData: Partial<ClassInCourse>): Promise<ClassInCourseDocument | null> {
    return this.classInCourseModel.findByIdAndUpdate(classInCourseId, updateData, { new: true }).exec();
  }

  async delete(classInCourseId: string): Promise<ClassInCourseDocument | null> {
    return this.classInCourseModel.findByIdAndDelete(classInCourseId).exec();
  }

  async findAll(): Promise<ClassInCourseDocument[]> {
    return this.classInCourseModel.find().populate(['courseId', 'studentId']).exec();
  }

  async findById(classInCourseId: string): Promise<ClassInCourseDocument | null> {
    return this.classInCourseModel.findById(classInCourseId).exec();
  }
}
