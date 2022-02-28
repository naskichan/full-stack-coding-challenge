import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import {
  Pizza,
  Prisma
} from '@prisma/client';

@Injectable()
export class PizzaService {
  constructor(private prisma: PrismaService) {}

  async pizza(pizzaWhereUniqueInput: Prisma.PizzaWhereUniqueInput): Promise<Pizza | null> {
    return this.prisma.pizza.findUnique({
      where: pizzaWhereUniqueInput,
    });
  }

  async getAll() {
    return await this.prisma.pizza.findMany();
  }
  
}