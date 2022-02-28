import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import {
  Ingredient,
  Prisma
} from '@prisma/client';

@Injectable()
export class IngredientService {
  constructor(private prisma: PrismaService) {}

  async ingredient(ingredientWhereUniqueInput: Prisma.IngredientWhereUniqueInput): Promise<Ingredient | null> {
    return this.prisma.ingredient.findUnique({
      where: ingredientWhereUniqueInput,
    });
  }
  
}