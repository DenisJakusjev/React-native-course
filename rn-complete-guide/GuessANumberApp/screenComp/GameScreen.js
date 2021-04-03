import React, { useState, useRef, useEffect } from 'react'
import { View, Alert, ScrollView, Text, FlatList, Dimensions } from 'react-native'
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


const renderListItem = (listLengh, itemData) => {
    return <View style={CSS.listItemBox}>
        <Text style={{ ...CSS.GOText, ...CSS.listItem }}>#{listLengh - itemData.index} </Text>
        <Text style={{ ...CSS.GOText, ...CSS.listItem }}>{itemData.item}</Text>
    </View>
}
const GameScreen = (props) => {
    const initialGuess = generateRandomBetween(1, 100, props.userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)
    const [pastGuesses, setPastGuesses] = useState([initialGuess.toString()]);
    const [availableDeviceWidth, setAvailableDeviceWidth] = useState(Dimensions.get("window").width);
    const [availableDeviceHeight, setAvailableDeviceHeight] = useState(Dimensions.get("window").height);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const { userNumber, onGameOver } = props
    //useEffect is procing after everyReRender, we have to obj destruct
    //To make sure this props only updates in this child
    useEffect(() => {
        if (currentGuess === props.userNumber) {
            props.onGameOver(pastGuesses.length)
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
        setPastGuesses((curPrevGuess) => [nextNumber.toString(), ...curPrevGuess]);
        setCurrentGuess(nextNumber);
    };
 
    if(availableDeviceWidth < 350){

        //Something
    }



    if(availableDeviceHeight < 500) {
        console.log("Dim < 500")
        console.log(Dimensions.get("window").height)
        return (
            <View style={CSS.SGSWrapper}>
            

               <Card style={CSS.gameCardDimHorizontal}>
                <MainButton onPress={nextGuessHandeler.bind(this, "lower")}><Ionicons name="md-remove" size={24} color="white" /></MainButton>
                <NumberContainer>{currentGuess}</NumberContainer>
                <MainButton onPress={nextGuessHandeler.bind(this, "grater")}><Ionicons name="md-add" size={24} color="white" /></MainButton>
                </Card>
            <FlatList
                keyExtractor={(item) => item}
                data={pastGuesses}
                renderItem={renderListItem.bind(this, pastGuesses.length)}
                contentContainerStyle={CSS.listScroll}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            />

            <View style={CSS.test}>
                <Text>Denis </Text>
                <Text>Jakusjev </Text>
                <Text>BottomBar</Text></View>
        </View>

        );
    }
    else{
        return (
        <View style={CSS.SGSWrapper}>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={CSS.GSButtonCard}>
                <MainButton onPress={nextGuessHandeler.bind(this, "lower")}><Ionicons name="md-remove" size={24} color="white" /></MainButton>

                <MainButton onPress={nextGuessHandeler.bind(this, "grater")}><Ionicons name="md-add" size={24} color="white" /></MainButton>
                
            </Card>
            {/* <View style={CSS.listItemContainer}>
            <ScrollView     >
                {pastGuesses.map((guess,index)=> renderListItem(guess, pastGuesses.length - index))}
            </ScrollView>
            </View> */}
            <FlatList
                keyExtractor={(item) => item}
                data={pastGuesses}
                renderItem={renderListItem.bind(this, pastGuesses.length)}
                contentContainerStyle={CSS.listScroll}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            />

            <View style={CSS.test}>
                <Text>Denis </Text>
                <Text>Jakusjev </Text>
                <Text>BottomBar</Text></View>
        </View>


    )
    }
    
}

export default GameScreen
