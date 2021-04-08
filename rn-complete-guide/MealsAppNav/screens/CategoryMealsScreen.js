import React from 'react'
import { View, Text ,StyleSheet, Button} from 'react-native'
import {CATEGORIES} from "../data/dummy-data"
const CategoryMealsScreen = (props) => {
    const selectedCategory = CATEGORIES.find(cat=>cat.id === props.navigation.getParam("categoryId"))
    return (
        <View style={styles.screen}>
            <Text>{selectedCategory.title}</Text>
            <Button title="MealsDetail" onPress={()=>{
             props.navigation.navigate("MealDetail")
            }}/>
            <Button title="GoBack" onPress={()=>{props.navigation.goBack()}}/>
        </View>
    )
}
CategoryMealsScreen.navigationOptions =(navigationData)=> {

 const selectedCategory = CATEGORIES.find(cat=>cat.id === navigationData.navigation.getParam("categoryId"))
 return {
    headerTitle: selectedCategory.title,
 }
    };
const styles = StyleSheet.create({
    screen:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
})
export default CategoryMealsScreen
