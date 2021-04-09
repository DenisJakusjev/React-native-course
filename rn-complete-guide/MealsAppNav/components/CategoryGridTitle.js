import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity,Platform,TouchableNativeFeedback } from 'react-native'


export default function CategoryGridTitle(props) {
    let TouchableSwithcer = TouchableOpacity;

    if(Platform.OS === "android" && Platform.Version >= 21){
        TouchableSwithcer = TouchableNativeFeedback
    }
    return<View style={styles.gridItem}>
    <TouchableSwithcer  onPress={() => props.nav.navigate({
        routeName: "CategoryMeals", params: {
            categoryId: props.item.id,
        }
    })}>
        <View style={{...styles.gridContainer,...{backgroundColor:props.item.color}}}>
            <Text style={styles.title} numberOfLines={2}>{props.item.title}</Text>
        </View>
    </TouchableSwithcer>
    </View> 
}

const styles = StyleSheet.create({
    gridItem: {
        //To take as mutch space as in needs
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius:10,
        overflow:'hidden'

    },
    title: {
        fontFamily: "open-sans-bold",
        fontSize:20,
        textAlign:"right"
    },
    gridContainer:{
        flex:1,
        borderRadius:10,
        //IOS
        shadowColor:"black",
        shadowOpacity:0.26,
        shadowOffset:{width:0,height:2},
        shadowRadius:10,
        //Android
        elevation:3,
        padding:15,
        justifyContent:"flex-end",
        alignItems:"flex-end"

    }
})