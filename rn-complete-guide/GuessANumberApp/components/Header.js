import React from 'react'
import { View, Text } from 'react-native'
import CSS from "../CSS"

const Header = (props) => {
    return (
        <View style={CSS.header}>
            <Text style={CSS.headerTitle}>{props.title}</Text>
        </View>
    )
}

export default Header
