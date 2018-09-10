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
      'https://www.slenderkitchen.com/sites/default/themes/slender_kitchen_theme/images/slide/slenderkitchen-meal-plan-recipe-c.png')
  ];

  constructor() { }

  ngOnInit() {
  }

}
