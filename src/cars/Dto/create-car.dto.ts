/* eslint-disable prettier/prettier */
import { IsString,MinLength } from 'class-validator';
export class CreateCarDTO {
  @IsString()
  @MinLength(3)
  readonly brand: string;
  @IsString()
  @MinLength(3)
  readonly model: string;
}
