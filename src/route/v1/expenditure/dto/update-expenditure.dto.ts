import { ArrayNotEmpty, IsArray, IsOptional, IsString, IsNumber, IsBoolean } from 'class-validator';

export class UpdateExpenditureDto {

  @IsOptional()
  @IsNumber()
  readonly percentForSchool?: number;

  @IsOptional()
  @IsNumber()
  readonly percentForPrincipal?: number;


  
  @IsOptional()
  @IsString()
  readonly image?: string;


  @IsOptional()
  @IsNumber()
  readonly device?: number;

  @IsOptional()
  @IsNumber()
  readonly salary?: number;

  @IsOptional()
  @IsArray()
  @ArrayNotEmpty()
  readonly expenditureArray?: number[];
}
