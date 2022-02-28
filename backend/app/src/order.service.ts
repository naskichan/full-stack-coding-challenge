import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import {
  Order,
  Prisma
} from '@prisma/client';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return this.prisma.order.findMany()
  }

  async createOrder(data: Prisma.OrderCreateInput): Promise<Order> {
    return this.prisma.order.create({
      data,
    });
  }
}