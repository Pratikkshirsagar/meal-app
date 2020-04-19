import { Platform } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import MealDetailScreen from '../screens/MealDetailScreen';
import FiltersScreen from '../screens/FavoritesScreen';
import Colors from '../constants/Colors';

const MealsNavigtor = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
      },
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    },
  }
);

const MealsFavTabNavigator = createBottomTabNavigator({
  Meals: MealsNavigtor,
  Favorites: FiltersScreen,
});

export default createAppContainer(MealsFavTabNavigator);
