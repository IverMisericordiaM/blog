import { IsString, MinLength, IsOptional } from 'class-validator';

export class CreateCategoriaDto {
  @IsString()
  @MinLength(1)
  Cdescription: string;

  @IsString()
  @MinLength(1)
  @IsOptional()
  Cphoto: string;
}
