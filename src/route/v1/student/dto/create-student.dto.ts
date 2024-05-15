import { IsString, IsNotEmpty, IsBoolean, IsDateString, IsNumber, IsObject } from 'class-validator';
import { Types } from 'mongoose';

export class CreateStudentDto {

  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsNumber()
  readonly age: number;

  
  @IsNotEmpty()
  @IsString()
  readonly birthday: string;


  @IsNotEmpty()
  @IsString()
  readonly grade: string;

  @IsNotEmpty()
  @IsString()
  readonly address: string;

  @IsNotEmpty()
  @IsString()
  readonly parentId: Types.ObjectId;

  @IsNotEmpty()
  @IsString()
  readonly classId: Types.ObjectId;

  @IsNotEmpty()
  @IsString()
  readonly role: string;

  @IsNotEmpty()
  @IsString()
  readonly schoolId: Types.ObjectId;

  @IsNotEmpty()
  @IsObject()
  readonly info: Object;
}
