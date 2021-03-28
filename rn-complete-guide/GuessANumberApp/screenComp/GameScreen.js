import React,{useState, useRef} from 'react'
import { View, Button, Alert} from 'react-native'
import CSS from "../CSS"
import NumberContainer from "../components/CardNumBox"
import Card from "../components/Card"
import Color from "../constans/colors"


//Somethign we want to NOT be rendered - you create it Ontop

const generateRandomBetween = (min,max,exclude) =>{
    min = Math.ceil(min)
    max = Math.floor(max)
    const rndNbr = Math.floor(Math.random()*(max-min))+min;
    if(rndNbr=== exclude){
        return generateRandomBetween(min,max,exclude);
    }
    else{
        return rndNbr
    }
}
const GameScreen = (props) => {
const [currentGuess,setCurrentGuess] = useState(generateRandomBetween(1,100,props.userChoice))
const currentLow = useRef(1);
const currentHigh = useRef(100);

    const nextGuessHandeler =direction=>{
    if((direction == "lower" && currentGuess<props.userChoice) 
    || (direction== "grater" && currentGuess>props.userChoice)){
    Alert.alert('Dont Lie', 'You know this is wrong', [{text:"sorry", style:"cancel"}]);
    return;
    };
    if(direction==="lower"){
       currentHigh.current = currentGuess;
    }
    else{
        currentLow.current = currentGuess;
    }
    const nextNumber = generateRandomBetween(currentLow.current,currentHigh.current,currentGuess);
    setCurrentGuess(nextNumber);
    
    }

    return (
        <View style={CSS.SGSWrapper}>
           <NumberContainer>{currentGuess}</NumberContainer>
           <Card style={CSS.GSButtonCard}>
            <View style={CSS.SGSButton}><Button title="Lower" color={Color.primary} onPress={nextGuessHandeler.bind(this,"lower")}/></View>
            <View style={CSS.SGSButton}><Button title="Grater"color={Color.accent} onPress={nextGuessHandeler.bind(this,"grater")}/></View>
            </Card>
        </View>
       
    )
}

export default GameScreen
