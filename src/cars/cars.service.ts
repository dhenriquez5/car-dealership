import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CarI } from './interfaces/Car.interface';
@Injectable()
export class CarsService {
  private carsList: CarI[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: uuid(),
      brand: 'Seat',
      model: 'Arona',
    },
    {
      id: uuid(),
      brand: 'Audi',
      model: 'A4',
    },
  ];

  getAll() {
    return this.carsList;
  }

  getById(id: string) {
    const car = this.carsList.find((car) => car.id === id);
    if (!car) throw new NotFoundException('El Carro no existe');
    return car;
  }
}
