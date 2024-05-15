import { IsOptional, IsString, IsNumber, IsBoolean } from 'class-validator';
import { Types } from 'mongoose'

export class UpdateSchoolDto {

  @IsOptional()
  @IsString()
  readonly name?: string;

  @IsOptional()
  @IsString()
  readonly role?: string;

  @IsOptional()
  @IsString()
  readonly studentId?: Types.ObjectId;
}
