import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Document } from 'mongoose';
import { Types } from 'mongoose';

export type CourseDocument = HydratedDocument<Course>;

@Schema()
export class Course {

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  fee: number;

  @Prop({ required: true })
  code: string;

  @Prop({ required: true })
  instructor: string;

  @Prop({ required: true })
  isDiscount: boolean;

  @Prop({ required: true })
  discountPercent: number;

  @Prop({ required: true })
  description: string;

  @Prop({ type: Types.ObjectId, ref: 'Student', required: true })
  studentId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Center', required: true })
  centerId: Types.ObjectId;

  @Prop({ type: [Types.ObjectId]})
  studentArray: Types.ObjectId[];

  @Prop({ type: Types.ObjectId, ref: 'School', required: true })
  schoolId: Types.ObjectId;
}


export const CourseSchema = SchemaFactory.createForClass(Course);