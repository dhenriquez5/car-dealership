/* eslint-disable prettier/prettier */

import { Brand } from 'src/brands/entities/brand.entity';
import { v4 as uuid } from 'uuid';

export const brands_seed: Brand[] = [
    {
        id: uuid(),
        name: 'Toyota',
        createdAt: new Date().getTime()
    },
    {
        id: uuid(),
        name: 'Seat',
        createdAt: new Date().getTime()
    },
    {
        id: uuid(),
        name: 'Audi',
        createdAt: new Date().getTime()
    },
]

