import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Document, Types } from 'mongoose';

export type RevenueDocument = HydratedDocument<Revenue>;

@Schema()
export class Revenue {

  @Prop({ type: Number, default:"" })
  revenue: number;

  @Prop({ type: Number, default:"" })
  actualRevenue: number;

  @Prop({ type: String, default:"" })
  reason: string;

  @Prop({ type: Types.ObjectId, default: new Types.ObjectId, ref: 'ClassInCourse' })
  classId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, default: new Types.ObjectId, ref: 'Student' })
  studentId: Types.ObjectId;
}

export const RevenueSchema = SchemaFactory.createForClass(Revenue);