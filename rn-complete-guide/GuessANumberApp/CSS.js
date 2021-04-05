import { StyleSheet , Dimensions,Platform} from "react-native"
import Color from "./constans/colors"

console.log("Lol")

const CSS = StyleSheet.create({
    //MainAppWindow
    container: {
        flex: 1,

    },
    header: {
        width: "100%",
        height: 90,
        paddingTop: 25,
        alignItems: "center",
        justifyContent: "center",
        flexDirection:"row"
    },
    headerIos:{
        backgroundColor:Color.primary
    },
    headerAndriod:{
        backgroundColor:"black",

    },

    headerTitle: {
       
        fontSize: 18,
        fontFamily: "OpenStansB"
    },
    headerTitleIos:{
        color: "black",
    },
    headerTitleAndroid:{
        color: "white",
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
        width: "80%",
        maxWidth:"95%",
        minWidth:300,
        
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
        borderRadius: 15,
        padding: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    SGSStatusCardNum: {
        fontSize: 14,
        margin: 10
    },
    GSButtonCard: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: Dimensions.get("window").height > 600 ? 20:5,
        width: "100%",
        height: 100,
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
        borderRadius: Dimensions.get("window").width * 0.7 / 2,
        borderWidth: 5,
        borderColor: "black",
        width: Dimensions.get("window").width * 0.7,
        height: Dimensions.get("window").width * 0.7,
        overflow: "hidden",
        marginVertical: Dimensions.get("window").height / 20

    },
    GOHighlight: {
        color: Color.primary,
        fontFamily: "OpenStansB",
        fontSize: Dimensions.get("window").height > 400 ? 20 :16 
    },
    GOTextCenter: {
        textAlign: "center"
    },

    MainButton: {
        backgroundColor: Color.primary,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
        // width:100,
        alignItems:"center"



    },
    MainButtonText: {
        color: "white",
        fontFamily: "OpenStans",
        fontSize: 14
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
        width: Dimensions.get("window").width > 350 ? "60%" : "80%",
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
    },
    gameCardDimHorizontal : {
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around",
        width:"80%"

    },
    headerImageBox :{
        height:"100%",
        width:90,
        
    }




})

export default CSS;