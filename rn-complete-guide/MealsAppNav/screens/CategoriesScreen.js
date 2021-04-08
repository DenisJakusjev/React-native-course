import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Platform } from 'react-native'
import { CATEGORIES } from "../data/dummy-data"
import Colors from "../constants/Colors"
const CategoriesScreen = (props) => {

    const renderGridItem = (itemData) => {
        return<TouchableOpacity style={styles.gridItem} onPress={()=> props.navigation.navigate({routeName:"CategoryMeals", params:{
            categoryId: itemData.item.id,
            

        }})}>
        <View >
            <Text>{itemData.item.title}</Text>
        </View>
        </TouchableOpacity>
    }


    return (
        //since we have FlatList it will pass automatickly our itemDate body per default
        <FlatList
            numColumns={2}
            data={CATEGORIES}
            renderItem={
                renderGridItem
            }
        />
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    gridItem: {
        //To take as mutch space as in needs
        flex: 1,
        margin: 15,
        height: 100
    }
})
export default CategoriesScreen
