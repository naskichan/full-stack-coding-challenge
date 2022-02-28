import { orders } from './data.mock';
import { Order } from './interfaces/order.interface';
import { Injectable } from '@nestjs/common';
import { OrderItemDTO } from './interfaces/orderItem.dto';

@Injectable()
export class AppService {
  ordersData = orders;
  addOrder(orderItems: OrderItemDTO[]) {
    return this.ordersData[
      this.ordersData.push({ orderItems: orderItems }) - 1
    ];
  }
  getOrders(): Order[] {
    return this.ordersData;
  }
}
