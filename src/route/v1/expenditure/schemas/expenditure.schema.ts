import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Document } from 'mongoose';

export type ExpenditureDocument = HydratedDocument<Expenditure>;

@Schema()
export class Expenditure {

  @Prop({ type: Number, default:"" })
  percentForSchool: number;

  @Prop({ type: String, default:"" })
  image: string;

  @Prop({ type: Number, default:"" })
  percentForPrincipal: number;

  @Prop({ type: Number, default:"" })
  device: number;

  @Prop({ type: Number, default:"" })
  salary: number;

  @Prop({ type: [Number], default:[] })
  expenditureArray: number[];
}

export const ExpenditureSchema = SchemaFactory.createForClass(Expenditure);