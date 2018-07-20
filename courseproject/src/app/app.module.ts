import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { ShoppinglistComponent } from "./shopping-list/shoppinglist/shoppinglist.component";
import { ShoppinglisteditComponent } from "./shopping-list/shoppinglistedit/shoppinglistedit.component";
import { RecipelistComponent } from "./recipe-book/recipelist/recipelist.component";
import { RecipeitemComponent } from "./recipe-book/recipeitem/recipeitem.component";
import { RecipedetailComponent } from "./recipe-book/recipedetail/recipedetail.component";
import { HeaderComponent } from "./header/header/header.component";

@NgModule({
  declarations: [
    AppComponent,
    ShoppinglistComponent,
    ShoppinglisteditComponent,
    RecipelistComponent,
    RecipeitemComponent,
    RecipedetailComponent,
    HeaderComponent
  ],
  imports: [BrowserModule, FormsModule, HttpModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
