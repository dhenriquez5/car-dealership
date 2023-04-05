import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDTO } from './Dto/create-car.dto';
import { UpdateCarDTO } from './Dto/update-car.dto';

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
  CreateCar(@Body() car: CreateCarDTO) {
    return this.carsService.create(car);
  }

  @Patch(':id')
  UpdateCar(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() carUpdated: UpdateCarDTO,
  ) {
    return this.carsService.update(id, carUpdated);
  }

  @Delete(':id')
  DeleteCar(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.delete(id);
  }
}
