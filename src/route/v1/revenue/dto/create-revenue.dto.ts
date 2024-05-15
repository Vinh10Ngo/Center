import { IsString, IsNotEmpty, IsBoolean, IsDateString, IsNumber } from 'class-validator';
import { Types } from 'mongoose'
export class CreateRevenueDto {

  @IsNotEmpty()
  @IsNumber()
  readonly revenue: number;

  @IsNotEmpty()
  @IsNumber()
  readonly actualRevenue: number;

  @IsNotEmpty()
  @IsString()
  readonly reason: string;

  @IsNotEmpty()
  @IsString()
  readonly classId: Types.ObjectId;

  @IsNotEmpty()
  @IsString()
  readonly studentId: Types.ObjectId;
}
