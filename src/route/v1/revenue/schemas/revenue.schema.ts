import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Document, Types } from 'mongoose';

export type RevenueDocument = HydratedDocument<Revenue>;

@Schema()
export class Revenue {

  @Prop({ required: true })
  revenue: number;

  @Prop({ required: true })
  actualRevenue: number;

  @Prop({ required: true })
  reason: string;

  @Prop({ type: Types.ObjectId, required: true, ref: 'ClassInCourse' })
  classId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, required: true, ref: 'Student' })
  studentId: Types.ObjectId;
}

export const RevenueSchema = SchemaFactory.createForClass(Revenue);