export interface Recipe {
    name: string;
    image: string;
    tags: string;
    description: string;
    CALORIES: number;
    COOK_TIME: number;
    PREP: number;
    CUISINE: string;
    Directions: string;
    nutritionalInfo: {
      servingSize: number;
      calories: number;
      carbs: number;
      fat: number;
      protein: number;
      cholesterol: number;
      sodium: number;
      fiber: number;
      sugar: number;
    };
    Ingrident: {
      name: string;
      quantity: string;
    }[];
    Instructions: {
      step: number;
      description: string;
    }[];
  
}
