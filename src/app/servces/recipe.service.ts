import { Ingredient } from './../models/indredient.model';
import { Recipe } from './../models/recipe.model';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class RecipeService {
 public recipeSelect=new EventEmitter<Recipe>();
 private recipes:Recipe[]=[
    new Recipe('Fried chicken ',
    'This is simply test',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxNslMoEQlniCTNiK3jw5EKMvuozLSedJtiT3yW3w7Gmj40gqbmw',
    [
      new Ingredient("Chicken",1),
      new Ingredient("Flour",10)
    ]),
    new Recipe('BURGER',
    'This is simply test',
    'http://www.seriouseats.com/recipes/assets_c/2013/09/20130909-ramen-hacks-new-burger-03-610px-thumb-625xauto-351448.jpg',
    [
      new Ingredient("Egg",1),
      new Ingredient("Onion",10)
    ])
  ];
  
getRecipes(){
  return this.recipes.slice();
}
}
