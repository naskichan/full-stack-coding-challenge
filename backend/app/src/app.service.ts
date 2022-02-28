import { orders } from './data.mock';
import { Order } from './interfaces/order.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  ordersData = orders;
  getOrders(): Order[] {
    return this.ordersData;
  }
}
