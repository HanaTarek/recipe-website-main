export class Recipe {
  name: string | undefined;
  image: string | undefined;
  tags: string[] = [];
  description: string | undefined;
  calories: number | undefined;
  cook_time: number | undefined;
  cuisine: string | undefined;
  nutritional_info: {
    serving_size: number;
    calories: number;
    carbs: number;
    fat: number;
    protein: number;
    cholesterol: number;
    sodium: number;
    fiber: number;
    sugar: number;
  } | undefined;
  ingredient: {
    category: string;
    name: string;
    quantity: number;
  }[] | undefined;
  instructions: string[] = [];
  prep: number | undefined;

}
