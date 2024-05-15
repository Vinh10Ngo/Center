import { IsOptional, IsString, IsNumber, IsBoolean, IsEmail } from 'class-validator';

export class UpdateParentDto {

  @IsOptional()
  @IsString()
  readonly name?: string;

  @IsOptional()
  @IsEmail()
  readonly email?: string;

  @IsOptional()
  @IsString()
  readonly phone?: string;

  @IsOptional()
  @IsString()
  readonly address?: string;
}
