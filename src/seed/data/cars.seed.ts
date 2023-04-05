/* eslint-disable prettier/prettier */
import { CarI } from 'src/cars/interfaces/Car.interface';
import { v4 as uuid } from 'uuid';

export const cars_seed: CarI[] = [
    {
        id: uuid(),
        brand: 'Toyota',
        model: 'Corolla'
    },
    {
        id: uuid(),
        brand: 'Seat',
        model: 'Arona'
    },
    {
        id: uuid(),
        brand: 'Audi',
        model: 'A4'
    },
];
