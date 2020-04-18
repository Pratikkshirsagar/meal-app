import { createStackNavigator } from 'react-navigation-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

createStackNavigator({
  categories: CategoriesScreen,
  categoryMeals: CategoryMealsScreen,
  mealDetail: mealDetail,
});
