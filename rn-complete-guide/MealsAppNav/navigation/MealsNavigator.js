//For V4 Installation ->
//1. npm install --save react-navigation
//2. expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
//3 Different types of Navigation that we can install and use
//3.1 Stack Navigation
//3.1 npm install --save react-navigation-stack
//3.1 In Code import { createStackNavigator } from 'react-navigation-stack';
//3.2 Tabs Navigation
//3.2 npm install --save react-navigation-tabs
//3.2 in Code import { createBottomTabNavigator } from 'react-navigation-tabs';
//3.3 Drawer Navigation
//3.3 npm install --save react-navigation-drawer
//3.3 in Code import { createDrawerNavigator } from 'react-navigation-drawer';
//4 import {createAppContainer} from "react-navigation"
//  STACK NAVIGATION
import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from "react-navigation"
import CategoriesScreen from "../screens/CategoriesScreen"
import CategoryMealsScreen from "../screens/CategoryMealsScreen"
import MealDetailScreen from "../screens/MealDetailScreen"
import {Platform} from "react-native"
import Colors from "../constants/Colors"

// Categories: {screen:CategoriesScreen,navgiationOption:{CSS}}
const MealsNavigator = createStackNavigator({
    Categories: {screen:CategoriesScreen, navigationOptions:{headerTitle: 'Meal Categories'}},
    CategoryMeals: CategoryMealsScreen,
    MealDetail:MealDetailScreen
},
{defaultNavigationOptions:{
    headerTitleStyle: { 
        flex:1,
        color: Platform.OS === "android" ? "white" : Colors.primaryColor,
    },
    headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
    }
}
}
)
    


export default createAppContainer(MealsNavigator)