import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingrediant.model';
import { ShoppingListService } from './shopping-list.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit{
  ingredients: Ingredient[] = []
// ingredients: Ingredient[] = [
// new Ingredient('Chicken', 2),
// new Ingredient('Green Chillies', 4),
// new Ingredient('Cumin powder', 1),
// new Ingredient('Tomato', 2),
// new Ingredient('Cardamom', 3)

// ];

constructor(private shoppingListService: ShoppingListService){}

ngOnInit(): void {
this.ingredients = this.shoppingListService.getIngredients();
}

onIngredientAdded(ingredient: Ingredient){

this.shoppingListService.addIngredient(ingredient.name,ingredient.amount);

}


}
