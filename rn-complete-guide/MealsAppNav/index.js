import React, {useState} from 'react'
import { View, Text } from 'react-native'
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  <- FirstTry
//This needs to Add fonts in first way                                                                                          
const fetchFonts =()=>{ // <- FirstTry
   console.log("Fonts are Loaded")
   return Font.loadAsync({
        "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
        "open-sans-bold":require("./assets/fonts/OpenSans-Bold.ttf")
    })
}
export default function MealsApp() {
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   <- FirstTry
// One way of Adding fonts 
// startAsync - what function Apploading will run and await a promise asnwer, then when we get an answer we go onFinish of what will happend
// And we need onError - because we have startASYNC - so its like with prommise resolve -/- reject                                
const [fontLoaded, setFontLoaded]=useState(false);                                                                                       // <- FirstTry
if(!fontLoaded){
    return <AppLoading startAsync={()=>fetchFonts()} onFinish={()=>setFontLoaded(true)} onError={console.log("ERROR")}/>
}


    return (
        <View>
            <Text style={{fontFamily:"open-sans-bold"}}>Alloha</Text>
        </View>
    )
}
