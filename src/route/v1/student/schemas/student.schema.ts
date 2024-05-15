import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Document } from 'mongoose';
import { Types } from 'mongoose';

export type StudentDocument = HydratedDocument<Student>;

@Schema()
export class Student {

  @Prop({ type: String, default:"" })
  name: string;

  @Prop({ type: Number, default:0 })
  age: number;

  @Prop({ type: String, default:"" })
  birthday: string;

  @Prop({ type: String, default:"" })
  grade: string;

  @Prop({ type: String, default:"" })
  address: string;

  @Prop({type: Object, default: {} })
  info: Object;


  @Prop({ type: Types.ObjectId, ref: 'Parent', required: true })
  parentId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'ClassInCourse', required: true })
  classId: Types.ObjectId;

  @Prop({ required: true })
  role: string;

  @Prop({ type: Types.ObjectId, ref: 'School', required: true })
  schoolId: Types.ObjectId;
}

export const StudentSchema = SchemaFactory.createForClass(Student);