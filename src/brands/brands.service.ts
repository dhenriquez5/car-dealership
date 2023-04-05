import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BrandsService {
  private brandsList: Brand[] = [
    // {
    //   id: uuid(),
    //   name: 'toyota',
    //   createdAt: new Date().getTime(),
    // },
  ];

  create(createBrandDto: CreateBrandDto) {
    const newBrand: Brand = {
      id: uuid(),
      name: createBrandDto.name.toLocaleLowerCase(),
      createdAt: new Date().getTime(),
    };
    this.brandsList.push(newBrand);
    return newBrand;
  }

  findAll() {
    return this.brandsList;
  }

  findOne(id: string) {
    const brand = this.brandsList.find((b) => b.id === id);
    if (!brand) throw new NotFoundException('Brand doesnt exist');
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandDB = this.findOne(id);
    this.brandsList = this.brandsList.map((b) => {
      if (b.id === id) {
        brandDB.updatedAt = new Date().getTime();
        brandDB = { ...brandDB, name: updateBrandDto.name };
        return brandDB;
      }
      return b;
    });
    return brandDB;
  }

  remove(id: string) {
    this.brandsList = this.brandsList.filter((b) => b.id !== id);
  }
}
