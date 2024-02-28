import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingrediant.model";

export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[]=[
    new Recipe('Chicken curry',
                'Gravy with Chicken and spices',
                'https://www.foodandwine.com/thmb/8YAIANQTZnGpVWj2XgY0dYH1V4I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/spicy-chicken-curry-FT-RECIPE0321-58f84fdf7b484e7f86894203eb7834e7.jpg',
                [new Ingredient('Chicken', 1),
                 new Ingredient('Tomato', 2)
              ]),
    new Recipe('Paneer butter masala',
              'Gravy with Paneer and spices',
              'https://www.yummytummyaarthi.com/wp-content/uploads/2021/12/1.jpg',
              [new Ingredient('Paneer', 1),
              new Ingredient('Tomato', 2)]),
    new Recipe('Shoyu Ramen Noodles',
              'Soya Sauce Flavored Noodles',
              'https://sudachirecipes.com/wp-content/uploads/2022/09/shoyu-ramen-sq-500x500.jpg',
              [new Ingredient('Noodles', 1),
              new Ingredient('Tomato', 1)])
  ];

  getRecipe(){
    return this.recipes.slice();
  }
}
