import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingrediant.model';
import { ShoppingListService } from './shopping-list.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']

})
export class ShoppingListComponent implements OnInit{
  ingredients: Ingredient[] = [];

constructor(private shoppingListService: ShoppingListService){}

ngOnInit(): void {
this.ingredients = this.shoppingListService.getIngredients();
this.shoppingListService.ingredientsChanged.
      subscribe((ingredientList: Ingredient[])=>{
        this.ingredients=ingredientList;
      })
}

// onIngredientAdded(ingredient: Ingredient){

// this.shoppingListService.addIngredient(ingredient.name,ingredient.amount);
// this.shoppingListService.addIngredient(ingredient);

// }


}
