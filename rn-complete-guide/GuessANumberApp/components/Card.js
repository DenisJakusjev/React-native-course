import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CSS from "../CSS"
//Props.children is everything you will wrap around in <Card>CHILDREN</Card>
const Card = (props) => {
    return (
        //Stlyes here gona be merged together where props.styles gona
        // override those that style.card have if needed
        <View style={{ ...CSS.card, ...props.style }}>
            {props.children}
        </View>
    )



}
const style = StyleSheet.create({


})
export default Card
