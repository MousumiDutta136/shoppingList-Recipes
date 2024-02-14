import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
recipes: Recipe[]=[
  new Recipe('Chicken curry', 'Gravy with Chicken and spices','https://www.allrecipes.com/thmb/Jg10XCt9o-5_eXvdpx3BLU30rv4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/1053643-295634ecf1344093987892a016024411.jpg'),
  new Recipe('Chicken curry', 'Gravy with Chicken and spices','https://www.allrecipes.com/thmb/Jg10XCt9o-5_eXvdpx3BLU30rv4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/1053643-295634ecf1344093987892a016024411.jpg')
];
constructor(){}
ngOnInit(){}
}
