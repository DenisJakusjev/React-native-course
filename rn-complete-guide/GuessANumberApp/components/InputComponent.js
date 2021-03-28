import React from 'react'
import { TextInput } from 'react-native'
import CSS from "../CSS"

const InputComponent = (props) => {
    return (
       <TextInput {...props} style={{...CSS.ICInput,...props.style}} />
    )
}

export default InputComponent
