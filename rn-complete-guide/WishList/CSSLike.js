import { StyleSheet } from 'react-native';
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 75,
        paddingHorizontal: 15
    },
    inputField: {
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        width: "80%"
    },
    inputContainer: {
        flex: 1,
        height: 200,
        // flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10
    },
    listItem: {
        paddingVertical: 10,
        marginVertical: 10,
        borderRightColor: "black",
        borderWidth: 0.5,
        borderRadius: 1,
        backgroundColor: "gray"

    },
    liItemContent: {
        paddingLeft: 10
    },
    modalButtonView: { 
        flexDirection: "row",
         padding: 10,
          justifyContent: "space-between",
           width: "60%"
         },
    modalButton:{
        width:"45%",
        height:60

    }
})

export default Styles