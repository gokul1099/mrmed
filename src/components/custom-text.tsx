import { View, Text,StyleSheet, StyleProp, ViewStyle, TextStyle } from 'react-native'
import React from 'react'
import { Theme } from '../utils/theme'


type CustomTextProps={
    content: string,
    type: 'primary' | 'secondary',
    styles?: StyleProp<TextStyle>
}
const CustomText = (props: CustomTextProps) => {

  const {content,type,styles} = props
  return (
      <Text style={[type === "primary" ? style.primary : style.secondary,styles]}>{content}</Text>
  )
}


const style= StyleSheet.create({
    primary:{
        color: Theme.textPrimary,
        fontSize:24,
        padding:10
    },
    secondary:{
        color: Theme.textSecondary,
        fontSize:18,
        padding:10
    }
})
export default CustomText