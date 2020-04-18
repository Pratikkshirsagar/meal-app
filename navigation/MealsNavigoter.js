import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const MealsNavigtor = createStackNavigator({
  categories: CategoriesScreen,
  categoryMeals: CategoryMealsScreen,
  mealDetail: MealDetailScreen,
});

export default createAppContainer(MealsNavigtor);
