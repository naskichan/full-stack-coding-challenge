import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { Order } from './interfaces/order.interface';
import { OrderItemDTO } from './interfaces/orderItem.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/orders')
  getOrders(): Order[] {
    return this.appService.getOrders();
  }

  @Post('/orders')
  addOrder(@Body() orderItems: OrderItemDTO[]): Order {
    return this.appService.addOrder(orderItems);
  }
}
