import React from 'react'
import { View, Text } from 'react-native'
import CSS from "../CSS";


const CardNumBox = (props) => {
    return (
        <View>
            <View style={CSS.SGSStatusCardNumBox}>
                <Text style={CSS.SGSStatusCardNum}>{props.children}</Text>
            </View>
        </View>
    )
}

export default CardNumBox
