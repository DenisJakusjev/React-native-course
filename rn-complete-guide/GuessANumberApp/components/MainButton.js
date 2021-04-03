import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import CSS from '../CSS'

const MainButton = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={{...CSS.MainButton, ...{width:props.setWidth}}}>
                <Text style={CSS.MainButtonText}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default MainButton
