import React from 'react'
import { View, Text ,StyleSheet, Button} from 'react-native'

const CategoryMealsScreen = (props) => {
    console.log(props)
    return (
        <View style={styles.screen}>
            <Text>CategoryMealssScreen</Text>
            <Button title="MealsDetail" onPress={()=>{
             props.navigation.navigate("MealDetail")
            }}/>
        </View>
    )
}
const styles = StyleSheet.create({
    screen:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
})
export default CategoryMealsScreen
