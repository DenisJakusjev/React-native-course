import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { CATEGORIES, MEALS } from "../data/dummy-data"
import SingleMeal from "../components/MealItem"


const CategoryMealsScreen = (props) => {
    const selectedCategory = CATEGORIES.find(cat => cat.id === props.navigation.getParam("categoryId"))

    console.log(selectedCategory)
    //Creating Array for selected category
    const displayedMeals = MEALS.filter(
        //every meal we get//    since categoryIds IS array, we have to check if 
        //                                    there is such mealID in that array
        //                   Basicly if meal fits our >=0 we add it to our array
        meal => meal.categoryIds.indexOf(selectedCategory.id) >= 0
    )
    const renderMealItem = (itemData) => {
        return (
            <SingleMeal item={itemData.item} nav={props.navigation} color={selectedCategory.color} />
        )
    }
    return (
        <View style={styles.screen}>
            <FlatList
                data={displayedMeals}
                renderItem={renderMealItem}
            />


        </View>
    )
}
CategoryMealsScreen.navigationOptions = (navigationData) => {

    const selectedCategory = CATEGORIES.find(cat => cat.id === navigationData.navigation.getParam("categoryId"))
    return {
        headerTitle: selectedCategory.title,
        headerStyle: {
            backgroundColor: selectedCategory.color,
        }
    }
};
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})
export default CategoryMealsScreen
