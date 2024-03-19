import { View, Text } from 'react-native'
import React, { useReducer } from 'react'
import VerifyScreen from './verify-screen'
import { useNavigation, useRoute } from '@react-navigation/native'

const VerifyContainer = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const onClickverfiy = ()=>{
    navigation.navigate("otpverified", {mobile:route?.params?.mobile})
  }
  return (
    <VerifyScreen onClickVerify={onClickverfiy}/>
  )
}

export default VerifyContainer