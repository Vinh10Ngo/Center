import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Document } from 'mongoose';
import { Types } from 'mongoose';

export type CenterDocument = HydratedDocument<Center>;

@Schema()
export class Center {

  @Prop({ type: String, default: "" })
  name: string;

  @Prop({ type: Number, default: "" })
  fee: number;

  @Prop({ type: String, default: "" })
  code: string;

  @Prop({ type: String, default: "" })
  instructor: string;

  @Prop({ type: Boolean, default: "" })
  isDiscount: boolean;

  @Prop({ type: Number, default: "" })
  discountPercent: number;

  @Prop({ type: String, default: "" })
  description: string;

  @Prop({ type: Types.ObjectId, ref: 'Student', default: new Types.ObjectId })
  studentId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Center', default: new Types.ObjectId })
  centerId: Types.ObjectId;

  @Prop({ type: [Types.ObjectId]})
  studentArray: Types.ObjectId[];

  @Prop({ type: Types.ObjectId, ref: 'School', default: new Types.ObjectId })
  schoolId: Types.ObjectId;
}


export const CenterSchema = SchemaFactory.createForClass(Center);