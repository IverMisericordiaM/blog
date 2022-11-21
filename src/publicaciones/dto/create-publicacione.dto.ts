import { IsString, MinLength, IsOptional, MaxLength } from 'class-validator';

export class CreatePublicacioneDto {
  @IsString()
  @MinLength(1)
  @MaxLength(255)
  Ptitulo: string;

  @IsString()
  @MinLength(1)
  Presumen: string;

  @IsString()
  @MinLength(1)
  Pdescription: string;

  @IsString()
  @MinLength(1)
  @MaxLength(20)
  Plugar: string;
}
