export interface Recipe {
  name: string;
  image: string;
  tags: string[];
  description: string;
  calories: number;
  cook_time: number;
  cuisine: string;
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
  };
  ingredient: {
    category: string;
    name: string;
    quantity: number;
  }[];
  instructions: string[];
  prep: number;
}
