import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Document } from 'mongoose';

export type ExpenditureDocument = HydratedDocument<Expenditure>;

@Schema()
export class Expenditure {

  @Prop({ required: true })
  percentForSchool: number;

  @Prop({ required: true })
  percentForPrincipal: number;

  @Prop({ required: true })
  device: number;

  @Prop({ required: true })
  salary: number;

  @Prop({ type: [Number], required: true })
  expenditureArray: number[];
}

export const ExpenditureSchema = SchemaFactory.createForClass(Expenditure);