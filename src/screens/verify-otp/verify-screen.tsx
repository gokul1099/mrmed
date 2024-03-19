import { View, Text,Image, TextInput } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import BackButton from '../../components/back'
import { SafeAreaView } from 'react-native-safe-area-context'
import { style } from './verify-style'
import CustomText from '../../components/custom-text'
import CustomButton from '../../components/custom-button'
import OtpView from '../../components/otp-view'
import { Theme } from '../../utils/theme';

type ScreenProps={
  onClickVerify:()=>void
}
const VerifyScreen = (props: ScreenProps) => {
  const route = useRoute()
  const inputRef = React.useRef(null)
  const onClick=()=>{
    console.log(inputRef)
    inputRef?.current?.submit()
  }
  return (
    <SafeAreaView style={style.container}>
      <View style={{flex:0.1}}>
      <BackButton />
      </View>
      
      <View style={style.imageContainer}>
          <Image  source={require("../../assets/illustration.png")} />
      </View>
      <View style={style.contentContainer}>
        <CustomText type='primary' content='VERIFICATION CODE' styles={{fontWeight:"bold"}}/>
        <CustomText type='secondary' content={`We have to send the verification to your Phone number  ${route.params.mobile}`}/>
      </View>
      <View style={style.otpContainer}>
        <OtpView ref={inputRef} />
        <CustomText content='Resend Code' type='primary' styles={{fontSize:16,color:Theme.btnColot}}/>
      </View>
      <View style={style.btnContainer}>
        <CustomButton text='Verify' callBack={()=>onClick()}/>
      </View>
    </SafeAreaView>
  )
}

export default VerifyScreen