import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "rxjs/Rx";

import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class DataStorageService {
  constructor(
    private httpClient: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  storeRecipes() {
    const token = this.authService.getToken();

    return this.httpClient.put(
      "https://udemy-recipe-book-9db59.firebaseio.com/recipes.json?auth=" +
        token,
      this.recipeService.getRecipes()
    );
  }

  getRecipes() {
    const token = this.authService.getToken();

    this.httpClient
      .get(
        "https://udemy-recipe-book-9db59.firebaseio.com/recipes.json?auth=" +
          token,
        {
          observe: "body",
          responseType: "json"
        }
      )
      .map(recipes => {
        console.log(recipes);
        // for (let recipe of recipes) {
        //   if (!recipe["ingredients"]) {
        //     recipe["ingredients"] = [];
        //   }
        // }
        // return recipes;
      })
      .subscribe((recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      });
  }
}
