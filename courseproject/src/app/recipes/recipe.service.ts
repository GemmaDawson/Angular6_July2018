import { EventEmitter } from "@angular/core";

import { Recipe } from "./recipe.model";

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      "Doughnut",
      "Doughnut Description",
      "https://s1.piq.land/2012/09/02/hShZ2cTlaKWQjmozoMoxvGA5_400x400.png"
    ),
    new Recipe(
      "Sushi",
      "Sushi Description",
      "https://s1.piq.land/2014/04/15/S2Way09KH87B0OVsJQRWpDcC_400x400.png"
    )
  ];

  recipeSelected = new EventEmitter<Recipe>();

  getRecipes() {
    //calling slice with no arguments will simply return a new array
    // which is an exact copy of the one in this service
    // returns a new array which is a copy
    return this.recipes.slice();
  }
}
