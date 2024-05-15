import { IsString, IsNotEmpty, IsBoolean, IsDateString, IsNumber } from 'class-validator';
import { Types } from 'mongoose'

export class CreateSchoolDto {

  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly role: string;

  @IsNotEmpty()
  @IsString()
  readonly studentId: Types.ObjectId;
}
