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

  async createPizza(data: Prisma.PizzaCreateInput): Promise<Pizza> {
    return this.prisma.pizza.create({
      data,
    });
  }

  async updatePizza(params: {
    where: Prisma.PizzaWhereUniqueInput;
    data: Prisma.PizzaUpdateInput;
  }): Promise<Pizza> {
    const { where, data } = params;
    return this.prisma.pizza.update({
      data,
      where,
    });
  }

  async deletePizza(where: Prisma.PizzaWhereUniqueInput): Promise<Pizza> {
    return this.prisma.pizza.delete({
      where,
    });
  }

}