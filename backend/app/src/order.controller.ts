import {
    Controller,
    Get,
    Param,
    Post,
    Body,
    Put,
    Delete,
  } from '@nestjs/common';
import { OrderService } from './order.service';
import { PizzaService } from './pizza.service';
import { Pizza as PizzaModel, Order as OrderModel} from '@prisma/client'

@Controller()
export class OrderController {
    constructor(
        private readonly orderService: OrderService,
        private readonly pizzaService: PizzaService,
    ) {}

    @Get('/pizza')
    async getPizzas(): Promise<PizzaModel[]> {
        return this.pizzaService.getAll();
    }
    @Get('/orders')
    async getOrders(): Promise<OrderModel[]> {
        return this.orderService.getAll()
    }
}