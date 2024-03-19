import { ImageComponent, StyleSheet } from "react-native";
import { Theme } from "../../utils/theme";

export const style= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Theme.primary
    },
    imageContainer:{
        flex:0.3,
        justifyContent:"center",
        alignItems:"center"
    },
    contentContainer:{
        flex:0.1,
        justifyContent:"center",
        alignItems:"center"
    },
    btnContainer:{
        flex:0.1,
        justifyContent:"flex-end"
    },
    otpContainer:{
        flex:0.3,
        justifyContent:"center",
        alignItems:"center"

    }
})