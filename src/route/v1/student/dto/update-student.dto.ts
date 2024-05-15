import { IsOptional, IsString, IsNumber, IsBoolean, IsObject } from 'class-validator';
import { Types } from 'mongoose';

export class UpdateStudentDto {

  @IsOptional()
  @IsString()
  readonly name?: string;


  @IsOptional()
  @IsString()
  readonly birthday?: string;


  @IsOptional()
  @IsNumber()
  readonly age?: number;

  @IsOptional()
  @IsString()
  readonly grade?: string;

  @IsOptional()
  @IsString()
  readonly address?: string;

  @IsOptional()
  @IsString()
  readonly parentId?: Types.ObjectId;

  @IsOptional()
  @IsString()
  readonly classId?: Types.ObjectId;

  @IsOptional()
  @IsString()
  readonly role?: string;

  @IsOptional()
  @IsString()
  readonly schoolId?: Types.ObjectId;

  
  @IsOptional()
  @IsObject()
  readonly info?: Object;
}
