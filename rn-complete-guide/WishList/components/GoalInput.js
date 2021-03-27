import React, { useState } from 'react'
import { View, TextInput, Button, Modal } from 'react-native'
import CSS from "../CSSLike"

const GoalInput = (props) => {
    const [inputGoal, setInput] = useState("");
    const resetOnSend = () => {
        props.addToList(inputGoal);
        setInput("");
        resetVisibility();
    }
    const resetVisibility=()=>{
        props.setVisibileMode(!props.visible);
    }
    return (
        <Modal visible={props.visible} animationType="slide"  >
        <View style={CSS.inputContainer}>
            <TextInput placeholder="Enter a goals" style={CSS.inputField} value={inputGoal} onChangeText={setInput} />
            <View style={CSS.modalButtonView}>
            <View style={CSS.modalButton}><Button title="Add" color="green" onPress={resetOnSend} /></View>
            <View style={CSS.modalButton}><Button title="Cancel" color="red" onPress={resetVisibility}></Button></View>
            </View>
        </View>
        </Modal>
    )
}

export default GoalInput
