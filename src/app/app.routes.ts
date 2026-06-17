import { Routes } from "@angular/router";
import { HomeComponent } from "./Home/home/home.component";
import { BrowseRecipesComponent } from "./Recipe/browse-recipes/browse-recipes.component";
import { MealPlannerComponent } from "./MealPlanner/meal-planner/meal-planner.component";
import { RecipeComponent } from "./Recipe/recipe/recipe.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { UserProfileComponent } from "./User/user-profile/user-profile.component";
import { AuthGuard } from "./auth.guard.service";
import { BlogComponent } from "./blog/blog.component";
import { GroceryListComponent } from "./grocery-list/grocery-list.component";
import { RecipeDetailsComponent } from "./Recipe/recipe-details/recipe-details.component";
import { ViewRecipeDetailsComponent } from "./view-recipe-details/view-recipe-details.component";

export const appRoutes:Routes=[
  {path: 'home',component: HomeComponent},
  {path:'recipes', canActivate:[AuthGuard],component:ViewRecipeDetailsComponent},
  {path:'meal-planner', canActivate:[AuthGuard],component:MealPlannerComponent},
  {path:'blog', canActivate:[AuthGuard],component:BlogComponent},
  {path:'grocery-list', canActivate:[AuthGuard],component:GroceryListComponent},
  {path:'signup',component:SignUpComponent},
  {path:'signin',component:SignInComponent},
  {path:'user-profile',component:UserProfileComponent},
  {path:'',redirectTo:'home',pathMatch:'full'}
];
