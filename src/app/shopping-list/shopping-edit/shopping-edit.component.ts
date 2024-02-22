import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingrediant.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  //shoppingList!: Ingredient;
  @ViewChild('nameInput') nameInputRef!:ElementRef;
  @ViewChild('amountInput') amountInputRef!:ElementRef
  @Output() selectedIngradients = new EventEmitter<Ingredient>()

  onAddItem(){
    const ingrdName = this.nameInputRef.nativeElement.value;
    const ingrdAmount = this.amountInputRef.nativeElement.value;
    const newIngredient= new Ingredient(ingrdName, ingrdAmount);
    this.selectedIngradients.emit(newIngredient);
  }
}
