import { View, Text, TextInput, StyleProp, TextInputProps, ViewStyle } from 'react-native';
import React from 'react'
import { StyleSheet } from 'react-native'
import { Theme } from '../utils/theme';
type CustomInputProps ={
    placeholder: string,
    styles?: StyleProp<ViewStyle>,
    onChange: React.Dispatch<React.SetStateAction<string>>,

}

const CustomInputs = (props:CustomInputProps) => {
  const{placeholder,styles,onChange}  = props
  return (
    <TextInput 
    placeholder={placeholder}
    placeholderTextColor={Theme.textPrimary}
    style={[style.textinput,styles]}
    keyboardType="phone-pad"
    onChangeText={(text)=>onChange(text)}

    />
  )
}

const style = StyleSheet.create({
    textinput:{
        // borderWidth:1,
        padding:10,
        backgroundColor:Theme.secondary,
        height:50
    }
})

export default CustomInputs