import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms'


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent {
  addRecipeForm = new FormGroup({
    recipeName: new FormControl(),
    cookTime: new FormControl(),
    description: new FormControl(),
    cuisine: new FormControl(),
    instructions: new FormControl()
  })


  onSubmit() {
    console.log(this.addRecipeForm.value);
  }
}
