import React from 'react'
import { View, Text, Platform, Image } from 'react-native'
import CSS from "../CSS"

const Header = (props) => {
    return (
        <View style={{
            ...CSS.header, ...Platform.select(
                {
            ios:CSS.headerIos, android:CSS.headerAndriod
                }

            )
        }}>
            <View style={CSS.headerImageBox}>
                <Image
                    style={CSS.image}
                    source={Platform.select({
                        ios:require("../assets/ios.png"),
                        android:require("../assets/android.png")
                    })}
                    // source={Platform.OS == "androind" ? require("../assets/ios.png") : require("../assets/android.png")}
                    resizeMode="cover" />
            </View>
            <Text style={{...CSS.headerTitle,...Platform.select({
                ios:CSS.headerTitleIos, android:CSS.headerTitleAndroid
            })}}>{props.title}</Text>

        </View>
    )
}


{/* <View style={CSS.imageBox}>
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
</View> */}
export default Header
