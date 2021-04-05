import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    Button,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
    Dimensions,
    ScrollView,
    KeyboardAvoidingView

} from 'react-native'
import CSS from "../CSS"
//Separating CSS by creating a new component that enholds all of the CSSing...
//To overlap and add together CSS otherwise separation of css objects doesnt work
//style={{...Style1,Styl2(that will be able to override)}}
import Card from "../components/Card"
import ICInput from "../components/InputComponent"
import Color from "../constans/colors"
import SelectedNum from "../components/CardNumBox"
import MainButton from '../components/MainButton'

const StartGameScreen = (props) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [confirmation, setConfirm] = useState(false);
    const [selectedNumber, setSelected] = useState();
    const [buttonWidth, setButtonWidth] = useState(Dimensions.get("window").width / 4);




    //Bad practice cuz we are adding new eventListener everytime and not removing old one.
    // const updateButtonWidth = () => {
    //     setButtonWidth(Dimensions.get("window").width / 4)
    //     console.log("lol")
    // }

    // Dimensions.addEventListener("change", updateButtonWidth)

    //Best practice
    useEffect(()=>{
        //Func to update state that hold Dimenstion
        const updateButtonWidth = () => {
             if(Dimensions.get("window").width / 4>100){
                setButtonWidth(Dimensions.get("window").width / 4);
             }
             else {
                 setButtonWidth (130);

             }
            
        }
        //Seting up EventListener to track demention change.
        Dimensions.addEventListener("change", updateButtonWidth);


    return ()=>{
        //Cleaning up EventListener to not stack 200500 of them
       Dimensions.removeEventListener("change", updateButtonWidth);
    }
    })


    const numberInputHandler = incText => {
        setEnteredValue(incText.replace(/[^0-9]/g, ""))
    }

    const confirmInputHandler = () => {
        const choosenNumber = parseInt(enteredValue)
        if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber >= 99) {
            Alert.alert("Invalid number", "Has to be a number between 1-99", [{ text: "Okay", style: "destructive", onPress: rejectHandler }])
            return
        }
        setConfirm(true);
        setSelected(choosenNumber);
        setEnteredValue("");
        Keyboard.dismiss();

    }

    const rejectHandler = () => {
        setEnteredValue("")
        setConfirm(false)
    }

    const gameStartHandler = () => {
        setEnteredValue("");
        props.setUserNumber(selectedNumber)
    }


    return (
        <ScrollView>
            <KeyboardAvoidingView behavior="padding">
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    <View style={CSS.SGSWrapper}>
                        <Text style={CSS.SGSTitle}>Start a new Game!</Text>
                        <Card style={CSS.SGSInputContainer}>
                            <Text style={CSS.SGSInputBoxText}>Select a number</Text>
                            {/* Since we have {...props} in Input comp we can
                send over default properties so COMPONENT is just a boilerplate
                with CSS we gave it(in separeta CSS file tho) so we can reuse it
                but give it all req props and maybe stateChange props
                */}
                            <ICInput
                                placeholder="Enter A1 Number"
                                keyboardType="number-pad"
                                blurOnSubmit
                                maxLength={2}
                                style={CSS.SGSInput}
                                value={enteredValue}
                                onChangeText={numberInputHandler}
                            />

                            <View style={CSS.SGSButtonContainer}>
                                <MainButton onPress={confirmInputHandler} setWidth={buttonWidth}>Start</MainButton>
                                <MainButton onPress={rejectHandler} setWidth={buttonWidth}>Reject</MainButton>
                                {/* <View style={{ width: buttonWidth }}>
                                    <Button
                                        title="Start"
                                        onPress={confirmInputHandler}
                                        color={Color.primary} />
                                </View>
                                <View style={{ width: buttonWidth }}>
                                    <Button title="Reject" onPress={rejectHandler} />
                                </View> */}
                            </View>
                        </Card>
                        {confirmation != false &&
                            <Card style={CSS.SGSStatusCard}>
                                <Text>You selected</Text>
                                <SelectedNum>{selectedNumber}</SelectedNum>

                                <MainButton onPress={gameStartHandler}>Start Game</MainButton>
                            </Card>}
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

export default StartGameScreen
