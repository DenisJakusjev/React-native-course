import React, { useState } from 'react'
import {
    View,
    Text,
    Button,
    TouchableWithoutFeedback,
    Keyboard,
    Alert

} from 'react-native'
import CSS from "../CSS"
//Separating CSS by creating a new component that enholds all of the CSSing...
//To overlap and add together CSS otherwise separation of css objects doesnt work
//style={{...Style1,Styl2(that will be able to override)}}
import Card from "../components/Card"
import ICInput from "../components/InputComponent"
import Color from "../constans/colors"
import SelectedNum from "../components/CardNumBox"

const StartGameScreen = (props) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [confirmation, setConfirm] = useState(false);
    const [selectedNumber, setSelected] = useState();


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

    const gameStartHandler=()=>{
        setEnteredValue("");
        props.setUserNumber(selectedNumber)
    }


    return (
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
                        <View style={CSS.SGSButton} onPress={() => { }}>
                            <Button title="Start" color={Color.primary} onPress={confirmInputHandler} />
                        </View>
                        <View style={CSS.SGSButton} >
                            <Button title="Reject" color={Color.accent} onPress={rejectHandler} />
                        </View>
                    </View>
                </Card>
                {confirmation != false &&
                        <Card style={CSS.SGSStatusCard}>
                        <Text>You selected</Text>
                        <SelectedNum>{selectedNumber}</SelectedNum>
                        <View style={CSS.SGSButton}>
                            <Button  title="START GAME" color={Color.accent} onPress={gameStartHandler}/>
                            </View>
                        </Card>}
            </View>
        </TouchableWithoutFeedback>
    )
}

export default StartGameScreen
