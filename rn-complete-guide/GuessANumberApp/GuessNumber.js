import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { useFonts } from 'expo-font';
import AppLoading from "expo-app-loading"
//ImportingCSS
import CSS from "./CSS"
import Header from "./components/Header"
import SGS from "./screenComp/StartGameScreen"
import GS from "./screenComp/GameScreen"
import GO from "./screenComp/GameOver"


//Loading in fonts

// const fetchFonts =()=>{
//     return Font.loadAsync({
//         "open-sans":require("./assets/fonts/OpenSans-Regular.ttf"),
//         "open-sans-bold":require("./assets/fonts/OpenSans-Bold.ttf")
//     });

// }
export default function GuessNumber() {
    const [userNumber, setUserNumber] = useState()
    const [guessRounds, setGuessRounds] = useState(0);
    const [loaded] = useFonts({
        OpenStansB: require('./assets/fonts/OpenSans-Bold.ttf'),
        OpenStans: require("./assets/fonts/OpenSans-Regular.ttf"),
    });




    //AppLoading is a loading screen that will fetch/execute any function we
    //that have to be a promis, and as promise is resolved - it will run OnFinish




    const gameStarter = (selectedNumber) => {
        setUserNumber(selectedNumber)
        setGuessRounds(0)
    }

    const gameReseter = () => {
        setUserNumber();
        setGuessRounds(0)
    }
    const gameOverHandler = (numOfRounds) => {
        setGuessRounds(numOfRounds)

    }
    let content = <SGS setUserNumber={gameStarter} />

    if (!loaded) {
        return <AppLoading />
    }

    if (userNumber && guessRounds <= 0) {
        content = <GS
            userNumber={userNumber}
            cancelGame={gameReseter}
            onGameOver={gameOverHandler} />
    } else if (guessRounds > 0) {
        content = <GO
            numberOfRounds={guessRounds}
            userNum={userNumber}
            gameResetr={gameReseter}
        />
    }
    return (
        <View style={CSS.container}>
            <Header title={"Guess a number"} />
            {content}
        </View>

    )
}
