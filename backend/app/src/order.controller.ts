import {
    Controller,
    Get,
    Param,
    Post,
    Body,
    Put,
    Delete,
  } from '@nestjs/common';
import { IngredientService } from './ingredient.service';
import { PizzaService } from './pizza.service';
import { Pizza as PizzaModel, Ingredient as IngredientModel} from '@prisma/client'

@Controller()
export class OrderController {
    constructor(
        private readonly ingredientService: IngredientService,
        private readonly pizzaService: PizzaService,
    ) {}

    @Get('/pizza')
    async getPizzas(): Promise<PizzaModel[]> {
        return this.pizzaService.getAll();
    }
}