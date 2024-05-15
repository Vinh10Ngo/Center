import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Document } from 'mongoose';
import { Types } from 'mongoose';

export type ClassInCourseDocument = HydratedDocument<ClassInCourse>;

@Schema()
export class ClassInCourse  {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  code: string;

  @Prop({ required: true })
  instructor: string;

  @Prop({ type: [String], required: true })
  schedule: string[];

  @Prop({ type: Types.ObjectId, ref: 'Course', required: true })
  courseId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Student', required: true })
  studentId: Types.ObjectId;
}
export const ClassInCourseSchema = SchemaFactory.createForClass(ClassInCourse);