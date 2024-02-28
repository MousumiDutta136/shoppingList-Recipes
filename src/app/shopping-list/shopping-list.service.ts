import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingrediant.model";

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Chicken', 2),
    new Ingredient('Green Chillies', 4),
    new Ingredient('Cumin powder', 1),
    new Ingredient('Tomato', 2),
    new Ingredient('Cardamom', 3)
    ];

    getIngredients(){
      return this.ingredients.slice();
    }

    // addIngredient(name : string , amount : number){
    //   this.ingredients.push(new Ingredient(name, amount));
    // }

    addIngredient(ingredient: Ingredient){
      this.ingredients.push(ingredient);
      this.ingredientsChanged.emit(this.ingredients.slice());
    }

}
