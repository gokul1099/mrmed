import { StyleSheet } from "react-native";
import { Theme } from "../../utils/theme";

export const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Theme.primary
    },
    imageContainer:{
        flex:0.5,
        justifyContent:"center",
        alignItems:"center"
    },
    contentContainer:{
        flex:0.4,
        justifyContent:"flex-start",
        alignItems:"center"
    }
})