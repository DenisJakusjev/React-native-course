import React, { useState } from 'react'
import {
    View,
    Text,
    Button,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
    Dimensions,
    ScrollView

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
    const [selectedNumber, setSelected] = useState()



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
                        placeholder="Enter a Number"
                        keyboardType="number-pad"
                        blurOnSubmit
                        maxLength={2}
                        style={CSS.SGSInput}
                        value={enteredValue}
                        onChangeText={numberInputHandler}
                    />

                    <View style={CSS.SGSButtonContainer}>
                        <MainButton onPress={confirmInputHandler}>Start</MainButton>
                        <MainButton onPress={rejectHandler}>Reject</MainButton>
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
        </ScrollView>
    )
}

export default StartGameScreen
