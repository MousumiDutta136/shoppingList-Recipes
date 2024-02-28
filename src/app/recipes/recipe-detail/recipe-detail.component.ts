import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingrediant.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit{
@Input() recipe!:Recipe;

constructor(private shoppingListServivce: ShoppingListService){}

ngOnInit(): void {
}

addIngredientToList(){
  for (const ingredient of this.recipe.ingredients) {
    this.shoppingListServivce.addIngredient(ingredient);
  }

}
}
