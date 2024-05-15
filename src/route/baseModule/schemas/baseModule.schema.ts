import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Document } from 'mongoose';

export type BaseModuleDocument = HydratedDocument<BaseModule>;

@Schema()
export class BaseModule {

  @Prop({ required: true })
  driver: string;

  @Prop({ required: true })
  selectADateAndTime: Date;

  @Prop({ required: true })
  selectACompany: string;

  @Prop({ required: true })
  additionInfomation: string;

  @Prop({ required: true })
  toWayATrip: boolean;

  @Prop({ required: true })
  medicallyEquipped: boolean;

  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  distance: number;

  @Prop({ required: true })
  statusId: string;

  @Prop({ required: true })
  tripStatusId: string;

  @Prop({ required: true })
  voucher: string;
}

export const BaseModuleSchema = SchemaFactory.createForClass(BaseModule);