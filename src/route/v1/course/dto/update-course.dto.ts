import { IsOptional, IsString, IsNumber, IsBoolean,IsArray } from 'class-validator';
import { Types } from 'mongoose';

export class UpdateCourseDto {

  @IsOptional()
  @IsString()
  readonly name?: string;

  @IsOptional()
  @IsNumber()
  readonly fee?: number;

  @IsOptional()
  @IsString()
  readonly code?: string;

  @IsOptional()
  @IsString()
  readonly instructor?: string;

  @IsOptional()
  @IsBoolean()
  readonly isDiscount?: boolean;

  @IsOptional()
  @IsNumber()
  readonly discountPercent?: number;

  @IsOptional()
  @IsString()
  readonly description?: string;

  @IsOptional()
  readonly studentId?: Types.ObjectId;

  @IsOptional()
  readonly centerId?: Types.ObjectId;

  @IsOptional()
  @IsArray()
  readonly studentArray?: Types.ObjectId[];

  @IsOptional()
  readonly schoolId?: Types.ObjectId;
}
