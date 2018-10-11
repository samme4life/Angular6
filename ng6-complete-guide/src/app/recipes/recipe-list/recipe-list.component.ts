import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a Test',
      'https://familynutrition.co.uk/wp-content/uploads/2014/06/Recipe-icon.png'),
    new Recipe('Another Test Recipe', 'This is also a Test',
      'http://icons.iconarchive.com/icons/lemon-liu/recipes/256/recipe-noodles-pasta-icon.png')
  ];

  constructor() { }

  ngOnInit() {
  }

}
