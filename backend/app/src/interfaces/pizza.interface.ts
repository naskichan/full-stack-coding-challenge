import { Ingredient } from './ingredient.interface';

export interface Pizza {
  ingredients: Ingredient[];
  name: string;
  price: number;
}
