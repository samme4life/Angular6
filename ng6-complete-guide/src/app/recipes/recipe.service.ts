import {Recipe} from "./recipe.model";
import {EventEmitter} from "@angular/core";

export  class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a Test',
      'https://familynutrition.co.uk/wp-content/uploads/2014/06/Recipe-icon.png'),
    new Recipe('Another Test Recipe', 'This is also a Test',
      'http://icons.iconarchive.com/icons/lemon-liu/recipes/256/recipe-noodles-pasta-icon.png')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
