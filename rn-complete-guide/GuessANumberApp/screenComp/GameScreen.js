import React, { useState, useRef, useEffect } from 'react'
import { View, Alert, ScrollView, Text } from 'react-native'
import CSS from "../CSS"
import NumberContainer from "../components/CardNumBox"
import Card from "../components/Card"
import Color from "../constans/colors"
import MainButton from '../components/MainButton'
import { Ionicons } from "@expo/vector-icons"


//Somethign we want to NOT be rendered - you create it Ontop



const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    const rndNbr = Math.floor(Math.random() * (max - min)) + min;
    if (rndNbr === exclude) {
        return generateRandomBetween(min, max, exclude);
    }
    else {
        return rndNbr
    }
}


const renderListItem =(value, numOfGuess) =>{
<View key={value} style={CSS.listItemBox}><Text style={CSS.listItem}>{value}</Text></View>
}
const GameScreen = (props) => {
    const initialGuess = generateRandomBetween(1, 100, props.userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)
    const [pastGuesses, setPastGuesses] = useState([initialGuess]);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const { userNumber, onGameOver } = props
    //useEffect is procing after everyReRender, we have to obj destruct
    //To make sure this props only updates in this child
    useEffect(() => {
        console.log(rounds)
        if (currentGuess === props.userNumber) {
            props.onGameOver(pastGuesses.length-1)
        }
        //Only if this 3 things updates/changes , useEffect will trigger
    }, [currentGuess, userNumber, onGameOver]);
    const nextGuessHandeler = direction => {
        if ((direction === "lower" && currentGuess < props.userNumber)
            || (direction === "grater" && currentGuess > props.userNumber)) {
            Alert.alert('Dont Lie', 'You know this is wrong', [{ text: "sorry", style: "cancel" }]);
            return;
        }
        if (direction === "lower") {
            currentHigh.current = currentGuess;
        }
        else {
            currentLow.current = currentGuess + 1;
        }
        //++doent work...
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setPastGuesses((curPrevGuess) => [nextNumber, ...curPrevGuess]);
        setCurrentGuess(nextNumber);
    };


    return (
        <View style={CSS.SGSWrapper}>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={CSS.GSButtonCard}>
                <MainButton onPress={nextGuessHandeler.bind(this, "lower")}><Ionicons name="md-remove" size={24} color="white" /></MainButton>
                <MainButton onPress={nextGuessHandeler.bind(this, "grater")}><Ionicons name="md-add" size={24} color="white" /></MainButton>
            </Card>
            <ScrollView>
                {pastGuesses.map(guess =>renderListItem(guess) )}
            </ScrollView>
        </View>

    )
}

export default GameScreen
