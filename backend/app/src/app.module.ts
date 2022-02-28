import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { OrderController } from './order.controller';
import { IngredientService } from './ingredient.service';
import { OrderService } from './order.service';
import { OrderItemService } from './orderitem.service';
import { PizzaService } from './pizza.service';

@Module({
  imports: [],
  controllers: [OrderController],
  providers: [IngredientService, OrderService, OrderItemService, PizzaService, PrismaService],
})
export class AppModule {}
