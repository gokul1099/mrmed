import { View, Text } from 'react-native'
import React from 'react'
import LoginScreen from './login-screen'
import { useNavigation } from '@react-navigation/native'
const LoginContainer = () => {
  const navigation = useNavigation()
  const onClickSignIn=(mobile: string)=>{
    navigation.navigate("verify",{mobile:mobile})
  }
  return (
    <LoginScreen onClickSignIn={onClickSignIn} />
  )
}

export default LoginContainer