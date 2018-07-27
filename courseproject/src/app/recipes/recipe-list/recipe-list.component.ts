import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
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

  constructor() {}

  ngOnInit() {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
