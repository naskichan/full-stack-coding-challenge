import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import {
  OrderItem,
  Prisma
} from '@prisma/client';

@Injectable()
export class OrderItemService {
  constructor(private prisma: PrismaService) {}

  async orderitem(orderitemWhereUniqueInput: Prisma.OrderItemWhereUniqueInput): Promise<OrderItem | null> {
    return this.prisma.orderItem.findUnique({
      where: orderitemWhereUniqueInput,
    });
  }


  async createOrderItem(data: Prisma.OrderItemCreateInput): Promise<OrderItem> {
    return this.prisma.orderItem.create({
      data,
    });
  }

  async updateOrderItem(params: {
    where: Prisma.OrderItemWhereUniqueInput;
    data: Prisma.OrderItemUpdateInput;
  }): Promise<OrderItem> {
    const { where, data } = params;
    return this.prisma.orderItem.update({
      data,
      where,
    });
  }

  async deleteOrderItem(where: Prisma.OrderItemWhereUniqueInput): Promise<OrderItem> {
    return this.prisma.orderItem.delete({
      where,
    });
  }

}