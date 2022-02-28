import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { Order } from './interfaces/order.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/orders')
  getOrders(): Order[] {
    return this.appService.getOrders();
  }
}
