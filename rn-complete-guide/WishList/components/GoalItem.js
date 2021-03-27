import React from 'react'
import { View, Text , Touchable, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback} from 'react-native'
import CSS from "../CSSLike"

//So here I need my Data for item I want to render
//and I need to pass in "Delete" functionality
//
// <TouchableOpacity onPress={()=>console.log("simple press")} onLongPress={()=>console.log("Its a long press")}>
const GoalItem = (props) => {
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={props.deleteHandler}>
        <View style={CSS.listItem} >
            
            <Text style={{paddingLeft:20}} key={props.itemData.id}  >{props.itemData.value}</Text>
            
        </View>
        </TouchableOpacity>
        
    )
}

export default GoalItem
