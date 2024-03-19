import { StyleSheet, TextStyle } from 'react-native';
import { Theme } from '../../utils/theme';
export const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Theme.primary,
        padding:20
        
    },
    backBtn:{
        color:"white"
    },
    backBtnContainer:{
        flex:0.1
    },
    contentContainer:{
        flex:0.2,
        justifyContent:"center",
        alignItems:"center",
        marginHorizontal:70,
    },
    contentTitle:{
        color:Theme.textPrimary,
        fontSize:24,
    },
    contentSubtitle:{
        color:Theme.textSecondary,
        fontSize:16,
        textAlign:"center",
        paddingTop:10

    },
    inputContainer:{
        flex:0.1,
        justifyContent:"center",
        alignItems:"center"
    },
    inputInnerContainer:{
        flex:1,
        flexDirection:"row",
        
    },
    iconContainer:{
        backgroundColor:Theme.secondary,
        flex:0.1,
        height:50,
        // borderWidth:1,
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
        justifyContent:"center",
        alignItems:"center"
    },
    btnContainer:{
        flex:0.1,
        justifyContent:"center",
    },
    termContainer:{
        flex:0.2,
        justifyContent:"flex-end"
    },
    termText:{
        color:Theme.textPrimary,
        textAlign:"center"
    }
})