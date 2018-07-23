import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "Doughnut",
      "Doughnut Description",
      "https://s1.piq.land/2012/09/02/hShZ2cTlaKWQjmozoMoxvGA5_400x400.png"
    )
  ];

  constructor() {}

  ngOnInit() {}
}
