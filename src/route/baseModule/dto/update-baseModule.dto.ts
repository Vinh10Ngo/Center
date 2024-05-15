import { IsOptional, IsString, IsNumber, IsBoolean } from 'class-validator';

export class UpdateBaseModuleDto {

  @IsOptional()
  @IsString()
  readonly driver?: string;

  @IsOptional()
  readonly selectADateAndTime?: Date;

  @IsOptional()
  @IsString()
  readonly selectACompany?: string;

  @IsOptional()
  @IsString()
  readonly additionInfomation?: string;

  @IsOptional()
  @IsBoolean()
  readonly toWayATrip?: boolean;

  @IsOptional()
  @IsBoolean()
  readonly medicallyEquipped?: boolean;

  @IsOptional()
  @IsString()
  readonly userId?: string;

  @IsOptional()
  @IsNumber()
  readonly distance?: number;

  @IsOptional()
  @IsString()
  readonly statusId?: string;

  @IsOptional()
  @IsString()
  readonly tripStatusId?: string;

  @IsOptional()
  @IsString()
  readonly voucher?: string;
}
