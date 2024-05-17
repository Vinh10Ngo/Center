import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Document } from 'mongoose';
import { Types } from 'mongoose';

export type ClassInCourseDocument = HydratedDocument<ClassInCourse>;

@Schema()
export class ClassInCourse  {
  @Prop({ type: String, default:"" })
  name: string;

  @Prop({ type: String, default:"" })
  code: string;

  @Prop({ type: String, default:"" })
  instructor: string;

  @Prop({ type: [String], default:"" })
  schedule: string[];

  @Prop({ type: Types.ObjectId, ref: 'Course', default:"" })
  courseId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Student', default:"" })
  studentId: Types.ObjectId;
}
export const ClassInCourseSchema = SchemaFactory.createForClass(ClassInCourse);