import { Component, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingrediant.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  //shoppingList!: Ingredient;
  @ViewChild('nameInput') nameInputRef!:ElementRef;
  @ViewChild('amountInput') amountInputRef!:ElementRef
  // @Output() selectedIngradients = new EventEmitter<Ingredient>()

  constructor(private shoppingListService:ShoppingListService){

  }

  onAddItem(){
    const ingrdName = this.nameInputRef.nativeElement.value;
    const ingrdAmount = this.amountInputRef.nativeElement.value;
    const newIngredient= new Ingredient(ingrdName, ingrdAmount);
    // this.selectedIngradients.emit(newIngredient);
    this.shoppingListService.addIngredient(newIngredient);
  }
}
