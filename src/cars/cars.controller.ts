import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private carsService: CarsService) {}
  @Get()
  getAllCars() {
    return this.carsService.getAll();
  }

  @Get(':id')
  getCarById(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.getById(id);
  }

  @Post()
  CreateCar(@Param('id', ParseIntPipe) id: number, @Body() json: any) {
    return json;
  }

  @Patch(':id')
  UpdateCar(@Param('id', ParseIntPipe) id: number, @Body() json: any) {
    return json;
  }

  @Delete(':id')
  DeleteCar(@Param('id', ParseIntPipe) id: number) {
    return {
      id,
    };
  }
}
