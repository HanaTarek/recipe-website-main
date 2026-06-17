import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Recipe } from './recipe';
import { Firestore, addDoc, collection, collectionData, query,where } from '@angular/fire/firestore';
import { doc, docData, getDoc, updateDoc} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from './user';
import { getAuth } from 'firebase/auth';
import { AngularFireStorage } from '@angular/fire/compat/storage';



@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {

  constructor( private AngularfireStore : AngularFirestore, private fireStore : Firestore , private Angulrfirestorage : AngularFireStorage) { }


  uploadImage($event: any , type : string , name : string){
    const path = $event.target.files[0];
    this.Angulrfirestorage.upload(type + "/" + name , path);
  }

  getImage(type : string , name : string ){

   return this.Angulrfirestorage.ref(type + "/" + name).getDownloadURL();


  }




  getCurrentUserData(): Observable<User> {
    const uid = this.getCurrentUserID();
    console.log(uid);
    const usersCOllection = collection(this.fireStore, 'users');
    const UserDoc = doc(usersCOllection, uid);
    const users = docData(UserDoc);

    return users as Observable<User>;
  }

  getCurrentUserID() {
    const auth = getAuth();
    const user = auth.currentUser;
    return user?.uid;
  }


  AddRecipe(recipe: Recipe){
    console.log("inside service");
    const RecipeCollection = collection(this.fireStore, 'Recipes');
    console.log("inside service2");
    addDoc(RecipeCollection,{...recipe});
  }

  getRecipeById(id: string): Observable<Recipe>{
    const RecipeCollection = collection(this.fireStore, 'Recipes');
    const recipeDoc = doc(RecipeCollection, id);
    const recipe = docData(recipeDoc);
    return recipe as Observable<Recipe>;
  }

  displayRecipes(): Observable<Recipe[]>{
    const recipes = collection(this.fireStore, 'Recipes');
    const recipess = collectionData(recipes);
    return recipess as Observable<Recipe[]>;

  }

  filterByTime(CookingTime : number) {
    const productsCoolection = collection(this.fireStore, 'Recipes');
    const q = query(productsCoolection, where('cook_time', '==', CookingTime));
    const result = collectionData(q);
    return result as Observable<any[]>;
  }

  filterByCuisine(Cuisine : string) {
    const productsCoolection = collection(this.fireStore, 'Recipes');
    const q = query(productsCoolection, where('cuisine', '==', Cuisine));
    const result = collectionData(q);
    return result as Observable<any[]>;
  }



  SearchByingredients(ingredients : string , ingredient : string) {
    const productsCollection = collection(this.fireStore, 'Recipes');
    const q = query(productsCollection,where("ingredient","==",ingredient), where("name", "==", ingredients));
    const result = collectionData(q);
    return result as Observable<any[]>;

  }



}
