import { EventEmitter, Injectable } from "@angular/core";

import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "Doughnut",
      "Doughnut Description",
      "https://s1.piq.land/2012/09/02/hShZ2cTlaKWQjmozoMoxvGA5_400x400.png",
      [
        new Ingredient("flour", 200),
        new Ingredient("milk", 50),
        new Ingredient("jam", 40)
      ]
    ),
    new Recipe(
      "Sushi",
      "Sushi Description",
      "https://s1.piq.land/2014/04/15/S2Way09KH87B0OVsJQRWpDcC_400x400.png",
      [
        new Ingredient("rice", 200),
        new Ingredient("salmon", 75),
        new Ingredient("ginger", 10),
        new Ingredient("wasabi", 10)
      ]
    )
  ];

  constructor(private shoplistService: ShoppingListService) {}

  getRecipes() {
    //calling slice with no arguments will simply return a new array
    // which is an exact copy of the one in this service
    // returns a new array which is a copy
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoplistService.addIngredients(ingredients);
  }
}
