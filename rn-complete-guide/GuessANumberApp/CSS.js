import { StyleSheet } from "react-native"
import Color from "./constans/colors"

const CSS = StyleSheet.create({
    //MainAppWindow
    container: {
        flex: 1
    },
    header: {
        width: "100%",
        height: 90,
        paddingTop: 25,
        backgroundColor: Color.primary,
        alignItems: "center",
        justifyContent: "center"
    },
    headerTitle: {
        color: "black",
        fontSize: 18
    },
    //Have no height and width
    card: {
        //Shadow only works for iOS
        shadowColor: "black",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        //Only works for android and is dead on props
        //We radius works for elevation
        elevation: 12,
        borderRadius: 10,
        backgroundColor: "white"
    },


    //StartGameScreen
    SGSWrapper: {
        flex: 1,
        alignItems: "center",
        padding: 10,
    },
    SGSTitle: {
        fontSize: 20,
        marginVertical: 10
    },
    SGSInputContainer: {
        width: 300,
        maxWidth: "80%",
        alignItems: "center",
    },
    SGSInputBoxText: {
        paddingVertical: 20,
    },
    SGSButtonContainer: {
        flexDirection: "row",
        paddingTop: 5,
        width: "100%",
        justifyContent: "space-between",
        padding: 15
    },
    SGSButton: {
        width: 90,
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 8,
       

    },
    SGSInput: {
        width: "80%",
        textAlign: "center"
    },

    ICInput: {
        height: 30,
        fontSize: 20,
        borderBottomColor: "gray",
        borderBottomWidth: 1,
        marginVertical: 10,
    },
    SGSStatusCard:{
        margin:20,
        maxWidth: "80%",
        alignItems: "center",
        padding:20
    },
    SGSStatusCardNumBox:{
        borderWidth:3,
        borderColor:Color.primary,
        marginBottom:20,
        borderRadius:70,
        padding:10,
        alignItems:"center",
        justifyContent:"center"
    },
    SGSStatusCardNum:{
        fontSize:60,
        margin:10
    },
    GSButtonCard:{
        flexDirection:"row",
        justifyContent:"space-around",
        marginTop:20,
        width:300,
        maxWidth:"80%"
    }
 


})

export default CSS;