import { View, Text, Pressable,StyleSheet, StyleProp, ViewStyle} from 'react-native'
import React from 'react'
import { Theme } from '../utils/theme'

type ButtomProps={
    text: string,
    callBack:()=>void,
    style?: StyleProp<ViewStyle>
}

const CustomButton = (props:ButtomProps) => {
    const {text,callBack} = props
  return (
    <Pressable style={style.container} onPress={callBack}>
        <Text style={style.textStyle}>{text}</Text>
    </Pressable>
  )
}

const style=StyleSheet.create({
    container:{
        backgroundColor:Theme.btnColot,
        padding:20,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:20
    },
    textStyle:{
        color: Theme.textPrimary,
        fontSize:14
    }
})

export default CustomButton