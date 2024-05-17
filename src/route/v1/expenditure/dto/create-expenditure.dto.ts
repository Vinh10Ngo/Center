import { IsString, IsNotEmpty, IsBoolean, IsDateString, IsNumber, IsArray, ArrayNotEmpty } from 'class-validator';

export class CreateExpenditureDto {

  @IsNotEmpty()
  @IsNumber()
  readonly percentForSchool: number;

  @IsNotEmpty()
  @IsString()
  readonly image: string

  @IsNotEmpty()
  @IsNumber()
  readonly percentForPrincipal: number;

  @IsNotEmpty()
  @IsNumber()
  readonly device: number;

  @IsNotEmpty()
  @IsNumber()
  readonly salary: number;

  @IsNotEmpty()
  @IsArray()
  @ArrayNotEmpty()
  readonly expenditureArray: number[];
}
