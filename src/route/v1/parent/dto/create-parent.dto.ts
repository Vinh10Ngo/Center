import { IsString, IsNotEmpty, IsBoolean, IsDateString, IsNumber, IsEmail } from 'class-validator';

export class CreateParentDto {

  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly phone: string;

  @IsNotEmpty()
  @IsString()
  readonly address: string;
}
