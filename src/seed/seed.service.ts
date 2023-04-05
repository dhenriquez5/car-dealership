import { Injectable } from '@nestjs/common';
import { BrandsService } from 'src/brands/brands.service';
import { CarsService } from '../cars/cars.service';
import { cars_seed } from './data/cars.seed';
import { brands_seed } from './data/brands.seed';

@Injectable()
export class SeedService {
  constructor(
    private carService: CarsService,
    private brandService: BrandsService,
  ) {}
  runSeed() {
    this.carService.seed_cars(cars_seed);
    this.brandService.seed_brands(brands_seed);
    return `Seed Executed`;
  }
}
