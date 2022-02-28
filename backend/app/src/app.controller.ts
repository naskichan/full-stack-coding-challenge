import {
  Controller,
  Get,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Order } from './interfaces/order.interface';
import { OrderItemDTO } from './interfaces/orderItem.dto';
import { arrayOf, objectOf, primitives } from '@altostra/type-validations';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/orders')
  getOrders(): Order[] {
    return this.appService.getOrders();
  }

  @Post('/orders')
  addOrder(@Body() orderItems: OrderItemDTO[]): Order {
    if (!isOrderDTOArray(orderItems)) {
      throw new HttpException('Invalid input', HttpStatus.BAD_REQUEST);
    }
    return this.appService.addOrder(orderItems);
  }
}

const isOrderDTOArray = arrayOf(
  objectOf<OrderItemDTO>({
    count: primitives.number,
    pizzaId: primitives.number,
  }),
);
