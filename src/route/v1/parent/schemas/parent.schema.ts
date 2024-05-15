import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Document } from 'mongoose';

export type ParentDocument = HydratedDocument<Parent>;

@Schema()
export class Parent {

  @Prop({type: String, default: ""})
  name: string;

  @Prop({type: String, default: ""})
  email: string;

  @Prop({type: String, default: ""})
  phone: string;

  @Prop({type: String, default: ""})
  address: string;
}

export const ParentSchema = SchemaFactory.createForClass(Parent);