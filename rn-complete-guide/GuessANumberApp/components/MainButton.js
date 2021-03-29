import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import CSS from '../CSS'

const MainButton = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={CSS.MainButton}>
                <Text style={CSS.MainButtonText}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default MainButton
