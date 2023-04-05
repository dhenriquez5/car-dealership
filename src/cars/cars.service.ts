import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CarI } from './interfaces/Car.interface';
import { CreateCarDTO } from './Dto/create-car.dto';
import { UpdateCarDTO } from './Dto/update-car.dto';
@Injectable()
export class CarsService {
  private carsList: CarI[] = [
    // {
    //   id: uuid(),
    //   brand: 'Toyota',
    //   model: 'Corolla',
    // },
  ];

  getAll() {
    return this.carsList;
  }

  getById(id: string) {
    const car = this.carsList.find((car) => car.id === id);
    if (!car) throw new NotFoundException('El Carro no existe');
    return car;
  }

  create(car: CreateCarDTO) {
    const newCar = { id: uuid(), ...car };
    this.carsList.push(newCar);
    return newCar;
  }

  update(id: string, carUpdate: UpdateCarDTO) {
    let car = this.getById(id);
    car = { ...carUpdate, id: car.id };
    const carAux = this.carsList.filter((f) => f.id !== id);
    this.carsList = [...carAux, car];
    return car;
  }

  delete(id: string) {
    const carExist = this.getById(id);
    this.carsList = this.carsList.filter((c) => c.id !== id);
    return true;
  }

  seed_cars(cars: CarI[]) {
    this.carsList = cars;
  }
}
