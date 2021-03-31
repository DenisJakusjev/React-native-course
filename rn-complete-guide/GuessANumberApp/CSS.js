import { StyleSheet } from "react-native"
import Color from "./constans/colors"

const CSS = StyleSheet.create({
    //MainAppWindow
    container: {
        flex: 1,

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
        fontSize: 18,
        fontFamily: "OpenStansB"
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
        backgroundColor: "white",

    },


    //StartGameScreen
    SGSWrapper: {
        flex: 1,
        alignItems: "center",
        padding: 10,
    },
    SGSTitle: {
        fontSize: 20,
        marginVertical: 10,
        fontFamily: "OpenStansB",
        color: "black"
    },
    SGSInputContainer: {
        width: 300,
        maxWidth: "80%",
        alignItems: "center",
    },
    SGSInputBoxText: {
        paddingVertical: 20,
        fontSize: 20,
        fontFamily: "OpenStans",
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
        height: 40,
        margin: 10,



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
    SGSStatusCard: {
        margin: 20,
        maxWidth: "80%",
        alignItems: "center",
        padding: 20
    },
    SGSStatusCardNumBox: {
        borderWidth: 3,
        borderColor: Color.primary,
        marginBottom: 20,
        borderRadius: 70,
        padding: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    SGSStatusCardNum: {
        fontSize: 60,
        margin: 10
    },
    GSButtonCard: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: 20,
        width: "100%",
        height: 150,
    },
    GOText: {
        fontFamily: "OpenStans",
        color: "black",


    },
    image: {
        width: "100%",
        height: "100%",
        padding: 5
    },
    imageBox: {
        borderRadius: 150,
        borderWidth: 5,
        borderColor: "black",
        width: "80%",
        height: 300,
        overflow: "hidden",
        marginVertical: 30

    },
    GOHighlight: {
        color: Color.primary,
        fontFamily: "OpenStansB",
        fontSize: 20
    },
    GOTextCenter: {
        textAlign: "center"
    },

    MainButton: {
        backgroundColor: Color.primary,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,



    },
    MainButtonText: {
        color: "white",
        fontFamily: "OpenStans",
        fontSize: 18
    },

    listItemBox: {
        borderColor: "gray",
        padding: 15,
        borderWidth: 1,
        flexDirection: "row",
        margin: 10,
        justifyContent: "space-around",
        width: "100%",
        alignItems: "center"

    },
    listItem: {

    },
    listItemContainer: {
        width: "100%",
        flex: 1,

    },
    listScroll: {
        flexGrow: 1,
        justifyContent: "flex-end",
        width: "60%",
        alignItems: "center"
        // flexDirection:"row",
    },
    test: {
        height: 50,
        borderColor: "black",
        borderTopWidth: 2,
        width: "110%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    }




})

export default CSS;