import React from 'react'
import {StyleSheet, FlatList, } from 'react-native'
import { CATEGORIES } from "../data/dummy-data"
import GridItem from "../components/CategoryGridTitle"
const CategoriesScreen = (props) => {

    const renderGridItem = (itemData) => {
        return <GridItem item={itemData.item} nav={props.navigation}></GridItem>
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
    }
})
export default CategoriesScreen
