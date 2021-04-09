import React from 'react'
import { View, Text, TouchableOpacity, TouchableNativeFeedback, StyleSheet, Platform, Image } from 'react-native'

export default function SingleMealRender(props) {
    let TouchableSwithcer = TouchableOpacity;

    if (Platform.OS === "android" && Platform.Version >= 21) {
        TouchableSwithcer = TouchableNativeFeedback
    }

    const onSelect = () => {
        props.nav.navigate({
            routeName: "MealDetail", params: {
                item: props.item,
                color: props.color
            }
        })
    }
    return (
        <View style={
            styles.mainWrap
        }>
            <TouchableSwithcer onPress={onSelect}>
                <View>
                    <Image
                        style={styles.image}
                        resizeMode="cover"
                        //Source to local file
                        // source={require("../assets/success.png")}
                        //Source network
                        //300 per default
                        fadeDuration={300}
                        source={{ uri: props.item.imageUrl }}
                    />
                    <Text>{props.item.title}</Text>
                </View>
            </TouchableSwithcer>
        </View>
    )
}


const styles = StyleSheet.create({
    mainWrap: {
        borderWidth: 2,
        borderColor: "black",
        width:"100%"
       
    },
    image: {
        width: "100%",
        height: 100
    }


})