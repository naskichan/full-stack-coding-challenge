import { orders, pizzas } from './data.mock';
import { Order } from './interfaces/order.interface';
import { Injectable } from '@nestjs/common';
import { OrderItemDTO } from './interfaces/orderItem.dto';
import { Pizza } from './interfaces/pizza.interface';

@Injectable()
export class AppService {
  ordersData = orders;
  pizzaData = pizzas;

  getPizzas(): Pizza[] {
    return this.pizzaData;
  }
  addOrder(orderItems: OrderItemDTO[]) {
    return this.ordersData[
      this.ordersData.push({ orderItems: orderItems }) - 1
    ];
  }
  getOrders(): Order[] {
    return this.ordersData;
  }
}
