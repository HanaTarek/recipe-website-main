import { NgModule ,importProvidersFrom } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from './environment/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HowItWorksComponent } from './Home/how-it-works/how-it-works.component';
import { FeaturedRecipesComponent } from './Home/featured-recipes/featured-recipes.component';
import { RecipeCardComponent } from './Home/recipe-card/recipe-card.component';
import { SpecialityMealsComponent } from './Home/speciality-meals/speciality-meals.component';
import { HomeComponent } from './Home/home/home.component';
import { BrowseRecipesComponent } from './Recipe/browse-recipes/browse-recipes.component';
import { RecipeDetailsComponent } from './Recipe/recipe-details/recipe-details.component';
import { MealPlannerComponent } from './MealPlanner/meal-planner/meal-planner.component';
import { RecipeComponent } from './Recipe/recipe/recipe.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthService } from './auth.service';
import { appRoutes } from './app.routes';
import { RouterModule } from '@angular/router';
import { UserProfileComponent } from './User/user-profile/user-profile.component';
import { BlogComponent } from './blog/blog.component';
import { GroceryListComponent } from './grocery-list/grocery-list.component';
import { ViewRecipeDetailsComponent } from './view-recipe-details/view-recipe-details.component';
import{RatingModule} from 'primeng/rating';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { ViewCommentsComponent } from './view-comments/view-comments.component';

import { ManageFollowersFollowingComponent } from './manage-followers-following/manage-followers-following.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ManageFollowersFollowingComponent,
    ViewRecipeDetailsComponent,
    CommentFormComponent,
    ViewCommentsComponent,
    HowItWorksComponent,
    FeaturedRecipesComponent,
    RecipeCardComponent,
    SpecialityMealsComponent,
    HomeComponent,
    BrowseRecipesComponent,
    RecipeDetailsComponent,
    MealPlannerComponent,
    RecipeComponent,
    SignUpComponent,
    SignInComponent,
    UserProfileComponent,
    BlogComponent,
    GroceryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    RatingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [
    AuthService,
    provideClientHydration(),
    importProvidersFrom([
      provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
      provideAuth(() => getAuth()),
      provideFirestore(() => getFirestore()),
    ]),
    AngularFirestore,
    AngularFirestoreModule,
    AngularFireAuth,
    AngularFireAuthModule,
    { provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
