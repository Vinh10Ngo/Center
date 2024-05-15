import { IsString, IsNotEmpty, IsBoolean, IsDateString, IsNumber } from 'class-validator';

export class CreateBaseModuleDto {

  @IsNotEmpty()
  @IsString()
  readonly driver: string;

  @IsNotEmpty()
  @IsDateString()
  readonly selectADateAndTime: Date;

  @IsNotEmpty()
  @IsString()
  readonly selectACompany: string;

  @IsNotEmpty()
  @IsString()
  readonly additionInfomation: string;

  @IsNotEmpty()
  @IsBoolean()
  readonly toWayATrip: boolean;

  @IsNotEmpty()
  @IsBoolean()
  readonly medicallyEquipped: boolean;

  @IsNotEmpty()
  @IsString()
  readonly userId: string;

  @IsNotEmpty()
  @IsNumber()
  readonly distance: number;

  @IsNotEmpty()
  @IsString()
  readonly statusId: string;

  @IsNotEmpty()
  @IsString()
  readonly tripStatusId: string;

  @IsNotEmpty()
  @IsString()
  readonly voucher: string;
}
