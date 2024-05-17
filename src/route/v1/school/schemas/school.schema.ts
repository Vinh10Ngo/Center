import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {  Types, HydratedDocument, Document } from 'mongoose';
export type SchoolDocument = HydratedDocument<School>;

@Schema()
export class School {

  @Prop({ type: String, default:"" })
  name: string;

  @Prop({ type: String, default:"" })
  role: string;

  @Prop({ default: new Types.ObjectId, type: Types.ObjectId, ref: 'Student' }) // Assuming studentId is of type string
  studentId: Types.ObjectId;
}

export const SchoolSchema = SchemaFactory.createForClass(School); 