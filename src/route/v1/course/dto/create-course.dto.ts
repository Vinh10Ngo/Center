import { IsString, IsNotEmpty, IsBoolean, IsDateString, IsNumber, IsArray } from 'class-validator';
import { Types } from 'mongoose';

export class CreateCourseDto {

  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsNumber()
  readonly fee: number;

  @IsNotEmpty()
  @IsString()
  readonly code: string;

  @IsNotEmpty()
  @IsString()
  readonly instructor: string;

  @IsNotEmpty()
  @IsBoolean()
  readonly isDiscount: boolean;

  @IsNotEmpty()
  @IsNumber()
  readonly discountPercent: number;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  readonly studentId: Types.ObjectId;

  @IsNotEmpty()
  readonly centerId: Types.ObjectId;

  @IsNotEmpty()
  @IsArray()
  readonly studentArray: Types.ObjectId[];

  @IsNotEmpty()
  readonly schoolId: Types.ObjectId;
}
