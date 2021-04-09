import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const MealDetailScreen = (props) => {
    console.log(props.navigation.getParam("item").title)
    return (
        <View style={styles.screen}>
            <Text>{props.navigation.getParam("item").title}</Text>
            <Button title="Go back to parent" onPress={() => {
                props.navigation.popToTop()
            }} />
        </View>
    )
}
MealDetailScreen.navigationOptions = (navigationData) => {
    return {
        headerTitle: navigationData.navigation.getParam("item").title,
        headerStyle: {
            backgroundColor: navigationData.navigation.getParam("color"),
        }
    }
};
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})

export default MealDetailScreen
