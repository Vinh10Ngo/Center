import { IsOptional, IsString, IsNumber, IsBoolean } from 'class-validator';
import { Types } from 'mongoose'

export class UpdateRevenueDto {

  @IsOptional()
  @IsNumber()
  readonly revenue?: number;

  @IsOptional()
  @IsNumber()
  readonly actualRevenue?: number;

  @IsOptional()
  @IsString()
  readonly reason?: string;

  @IsOptional()
  @IsString()
  readonly classId?: Types.ObjectId;

  @IsOptional()
  @IsString()
  readonly studentId?: Types.ObjectId;
}
