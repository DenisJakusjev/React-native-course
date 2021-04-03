import React from 'react'
import { View, Text, Button, Image } from 'react-native'
import MainButton from '../components/MainButton'
import CSS from "../CSS"
const GameOver = (props) => {
    return (
        <View style={{ ...CSS.SGSWrapper, justifyContent: "center" }}>
            <Text style={CSS.SGSTitle}>GameOver</Text>
            <View style={CSS.imageBox}>
                <Image
                    style={CSS.image}
                    resizeMode="cover"
                    //Source to local file
                    source={require("../assets/success.png")}
                    //Source network
                    //300 per default
                    fadeDuration={300}
                //source={{uri:"https://static.wikia.nocookie.net/wowpedia/images/0/04/Mage_Crest.png/revision/latest/scale-to-width-down/250?cb=20151110144907"}}
                />
            </View>
            <Text style={{ ...CSS.GOText, ...CSS.GOTextCenter }}>Your phone needed <Text style={CSS.GOHighlight}>{props.numberOfRounds} </Text>rounds to guess number <Text style={CSS.GOHighlight}>{props.userNum}</Text> </Text>
            <MainButton onPress={props.gameResetr}>RG</MainButton>
        </View>
    )
}

export default GameOver
