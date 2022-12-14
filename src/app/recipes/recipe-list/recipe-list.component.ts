import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'This is simply a test',
      'https://www.humnutrition.com/blog/wp-content/uploads/2020/01/are-air-fryers-healthy.jpg.webp'
    ),
    new Recipe(
      'Another test Recipe',
      'This is simply a test',
      'https://www.humnutrition.com/blog/wp-content/uploads/2020/01/are-air-fryers-healthy.jpg.webp'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
