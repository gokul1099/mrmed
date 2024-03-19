import { View, Text ,Image} from 'react-native'
import React from 'react'
import { style } from './verified-style'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomText from '../../components/custom-text'
import { useRoute } from '@react-navigation/native'
import BackButton from '../../components/back'

const OtpVerifiedScreen = () => {
  const route = useRoute()
  const number = route?.params?.mobile
  return (
    <SafeAreaView style={style.container}>
      <View style={{flex:0.1}}>
        <BackButton />
      </View>
      <View style={style.imageContainer}>
        <Image source={require("../../assets/verified.png")} style={{height:"50%",width:"50%"}}/>
      </View>
      <View style={style.contentContainer}>
        <CustomText type='primary' content='OTP VERIFIED' styles={{fontWeight:"bold"}} />
        <CustomText type='secondary' content='Succesfully verified your phone Number' />
        <CustomText type='primary' content={`+91${number.slice(0,3)}****${number.slice(8)}`} />
      </View>
      
    </SafeAreaView>
  )
}

export default OtpVerifiedScreen