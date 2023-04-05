/* eslint-disable prettier/prettier */
import { IsOptional, IsString, MinLength } from 'class-validator';
export class UpdateCarDTO {

    @IsString()
    @MinLength(3)
    @IsOptional()
    readonly model: string;

    @IsString()
    @MinLength(3)
    @IsOptional()
    readonly brand: string;

}
