import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
  @Output() recipeWasSelected=new EventEmitter<Recipe>();

recipes: Recipe[]=[
  new Recipe('Chicken curry', 'Gravy with Chicken and spices','https://www.foodandwine.com/thmb/8YAIANQTZnGpVWj2XgY0dYH1V4I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/spicy-chicken-curry-FT-RECIPE0321-58f84fdf7b484e7f86894203eb7834e7.jpg'),
  new Recipe('Paneer butter masala', 'Gravy with Paneer and spices','https://www.yummytummyaarthi.com/wp-content/uploads/2021/12/1.jpg')
];
constructor(){}
ngOnInit(){}

onRecipeSelected(recipe:Recipe){
  this.recipeWasSelected.emit(recipe);
}
}
