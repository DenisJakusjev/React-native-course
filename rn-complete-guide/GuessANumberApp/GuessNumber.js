import React, {useState} from 'react'
import { View, Text } from 'react-native'
//ImportingCSS
import CSS from "./CSS"
import Header from "./components/Header"
import SGS from "./screenComp/StartGameScreen"
import GS from "./screenComp/GameScreen"

export default function GuessNumber() {
    const [userNumber,setUserNumber] = useState()

    const gameStarter=(selectedNumber)=>{
        setUserNumber(selectedNumber)

    }

    let content = <SGS setUserNumber={gameStarter}/>

    if(userNumber){
        content=<GS userNumber={userNumber}/>
    }
    return (
        <View style={CSS.container}>
            <Header title={"Guess a number"} />
            {content}
        </View>

    )
}
