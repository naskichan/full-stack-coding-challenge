import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { IngredientService } from './ingredient.service';
import { OrderService } from './order.service';
import { OrderItemService } from './orderitem.service';
import { PizzaService } from './pizza.service';

@Module({
  imports: [],
  controllers: [OrderController],
  providers: [IngredientService, OrderService, OrderItemService, PizzaService],
})
export class AppModule {}
