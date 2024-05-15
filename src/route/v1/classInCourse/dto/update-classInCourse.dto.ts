import { IsOptional, IsString, IsNumber, IsBoolean, IsArray } from 'class-validator';
import { Types } from 'mongoose';

export class UpdateClassInCourseDto {

  @IsOptional()
  @IsString()
  readonly name?: string;

  @IsOptional()
  @IsString()
  readonly code?: string;

  @IsOptional()
  @IsString()
  readonly instructor?: string;

  @IsOptional()
  @IsArray()
  readonly schedule?: string[];

  @IsOptional()
  readonly courseId?: Types.ObjectId;

  @IsOptional()
  readonly studentId?: Types.ObjectId;
}
