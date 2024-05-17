import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student, StudentDocument } from './schemas/student.schema';

@Injectable()
export class StudentRepository {
  constructor(@InjectModel(Student.name) private studentModel: Model<StudentDocument>) {}


  async create(student: Student): Promise<StudentDocument> {
    const newStudent = new this.studentModel(student);
    return newStudent.save();
  }

  async update(studentId: string, updateData: Partial<Student>): Promise<StudentDocument | null> {
    return this.studentModel.findByIdAndUpdate(studentId, updateData, { new: true }).exec();
  }

  async delete(studentId: string): Promise<StudentDocument | null> {
    return this.studentModel.findByIdAndDelete(studentId).exec();
  }

  async findAll(): Promise<StudentDocument[]> {
    return await this.studentModel.find().populate(['parentId' , 'classId' , 'schoolId']).exec();
  }

  async findById(studentId: string): Promise<StudentDocument | null> {
    return this.studentModel.findById(studentId).exec();
  }
}
