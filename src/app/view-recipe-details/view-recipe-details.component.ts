import { Component } from '@angular/core';

@Component({
  selector: 'app-view-recipe-details',
  templateUrl: './view-recipe-details.component.html',
  styleUrl: './view-recipe-details.component.css'
})
export class ViewRecipeDetailsComponent {
 value: number = 3;
 rate: number = 0;

 Recipe = {
  name: 'Creamy Salmon Pasta',
  image: "assets/creamySamon.png",
  tags: 'EGG-Free, Nut-FREE, PESCATaRIAN',
  description: 'This restaurant-worthy Creamy Salmon Pasta is sure to become your new favorite weeknight meal. Its rich and flavorful but oh-so-easy to make. The whole recipe comes together in about 20 minutes. Whats not to love?',
  CALORIES: 155 ,
  COOK_TIME: 20,
  PREP: 10,
  CUISINE: 'Italian',
  Directions: 'Preheat the oven to 350ºF. Line a 12-cup muffin tin. Set it aside.In a large bowl, whisk together the bananas, eggs, almond milk, peanut butter, maple syrup, and vanilla extract. Stir in the oats, baking powder, and salt. Fold in the chocolate chips.Scoop the batter into the prepared muffin tin and bake until they are golden and an inserted toothpick comes out clean, about 20 to 25 minutes. Allow the baked oatmeal to cool slightly before serving. Once cooled completely, store in an airtight container in the refrigerator for up to 5 days.',
  nutritionalInfo: {
    servingSize: 1,
    calories: 155,
    carbs: 21,
    fat: 6,
    protein: 5,
    cholesterol: 20,
    sodium: 100,
    fiber: 3,
    sugar: 10
  },
  Ingrident: [
    {name: 'Salmon', quantity: '1 lb'},
    {name: 'Pasta', quantity: '1 lb'},
    {name: 'Heavy Cream', quantity: '1 cup'},
    {name: 'Garlic', quantity: '2 cloves'},
    {name: 'Lemon', quantity: '1'},
    {name: 'Parmesan', quantity: '1/2 cup'},
    {name: 'Parsley', quantity: '1/4 cup'},
    {name: 'Salt', quantity: '1 tsp'},
    {name: 'Pepper', quantity: '1/2 tsp'}
  ],
  Instructions: [
    {step: 1, description: 'Cook the pasta according to the package instructions. Drain and set aside.'},
    {step: 2, description: 'In a large skillet, heat the olive oil over medium heat. Add the garlic and cook until fragrant, about 1 minute.'},
    {step: 3, description: 'Add the salmon to the skillet and cook until golden brown and cooked through, about 4-5 minutes per side.'},
    {step: 4, description: 'Remove the salmon from the skillet and set aside.'},
    {step: 5, description: 'Add the heavy cream to the skillet and bring to a simmer.'},
    {step: 6, description: 'Stir in the lemon juice, Parmesan, parsley, salt, and pepper.'},
    {step: 7, description: 'Add the cooked pasta to the skillet and toss to coat.'},
    {step: 8, description: 'Serve the pasta topped with the salmon.'}
  ]



};
 scroll() {
  var elem = document.getElementById("CommentForm");
  if (elem) {
    elem.scrollIntoView();
  }
}


 heartIconClass: string = 'fa-regular fa-heart';

  toggleHeart() {
    console.log('toggleHeart');
    this.heartIconClass = this.heartIconClass === 'fa-regular fa-heart' ? 'fa-solid fa-heart' : 'fa-regular fa-heart';
  }
  bookmarkIconClass: string = 'fa-regular fa-bookmark';
  togglebookmark(){
    console.log('togglebookmark');
    this.bookmarkIconClass = this.bookmarkIconClass === 'fa-solid fa-bookmark' ? 'fa-regular fa-bookmark' : 'fa-solid fa-bookmark';
  }

}
