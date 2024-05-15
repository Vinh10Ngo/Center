import { IsString, IsNotEmpty, IsBoolean, IsDateString, IsNumber, IsArray } from 'class-validator';
import { Types } from 'mongoose';

export class CreateClassInCourseDto {

  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly code: string;

  @IsNotEmpty()
  @IsString()
  readonly instructor: string;

  @IsNotEmpty()
  @IsArray()
  readonly schedule: string[];

  @IsNotEmpty()
  readonly courseId: Types.ObjectId;

  @IsNotEmpty()
  readonly studentId: Types.ObjectId;
}
