import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingrediant.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
ingredients: Ingredient[] = [
new Ingredient('Chicken', 2),
new Ingredient('Green Chillies', 4),
new Ingredient('Cumin powder', 1),
new Ingredient('Tomato', 2),
new Ingredient('Cardamom', 3)

];

onIngredientAdded(ingredient: Ingredient){

this.ingredients.push(ingredient);
console.log(ingredient);
}


}
