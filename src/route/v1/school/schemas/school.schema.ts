import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {  Types, HydratedDocument, Document } from 'mongoose';
export type SchoolDocument = HydratedDocument<School>;

@Schema()
export class School {

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  role: string;

  @Prop({ required: true, type: Types.ObjectId, ref: 'Student' }) // Assuming studentId is of type string
  studentId: Types.ObjectId;
}

export const SchoolSchema = SchemaFactory.createForClass(School);