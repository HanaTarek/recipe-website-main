import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { RecipeServiceService } from '../recipe-service.service';
import { Observable } from 'rxjs';
import { Recipe } from '../recipe';
@Component({
  selector: 'app-discovery',
  templateUrl: './discovery.component.html',
  styleUrl: './discovery.component.css'
})
export class DiscoveryComponent {

  recipes: Observable<Recipe[]>;
  recipeX: Observable<Recipe>;
  recipesF: Observable<Recipe[]>;
 recipesI: Observable<Recipe[]>;

 recipeC: Observable<Recipe[]>;
 image: Observable<any> | undefined;

  constructor(private recipeService: RecipeServiceService) {
    this.recipes = this.recipeService.displayRecipes();
    this.recipeX = this.recipeService.getRecipeById('mdJiqB4LcBEIYNJTM5wQ');
    this.recipesF = this.recipeService.filterByTime(20);
    this.recipesI = this.recipeService.filterByCuisine('Italian');
    this.recipeC = this.recipeService.SearchByingredients('ingredient', 'Pasta');
    this.path = ''; // Initialize the 'path' property

  }

  path:string

  upload($event: any){
    const path = $event.target.files[0];
    this.recipeService.uploadImage($event , "person" , "wael");
  }

  uploadImage(){

  }

  display(){
    console.log(this.image);
    this.image = this.recipeService.getImage("person" , "wael");
  }



}
