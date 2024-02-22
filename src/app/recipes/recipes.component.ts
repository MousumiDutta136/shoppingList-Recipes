import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit{
  selectedRecipe!:Recipe;
  constructor(private recipeServivce:RecipeService){}

  ngOnInit(): void {
    this.recipeServivce.recipeSelected.subscribe((recipe)=>{
      this.selectedRecipe = recipe;
    })
  }
}
