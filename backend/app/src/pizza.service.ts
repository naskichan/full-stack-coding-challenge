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

  async pizzas(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.PizzaWhereUniqueInput;
    where?: Prisma.PizzaWhereInput;
    orderBy?: Prisma.PizzaOrderByWithRelationInput;
  }): Promise<Pizza[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.pizza.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
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