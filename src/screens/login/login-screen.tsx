import { View, Text, Image, Pressable, TextInputProps } from 'react-native';
import React from 'react'
import { styles } from './login-style';
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomText from '../../components/custom-text'
import CustomInputs from '../../components/custom-input'
import { Theme } from '../../utils/theme'
import CustomButton from '../../components/custom-button'
import BootSplash from "react-native-bootsplash";

type ScreenProps={
  onClickSignIn:(number:number)=>void
}
const LoginScreen = (props: ScreenProps) => {
  const {onClickSignIn} = props
  const[mobile,setMobile]=React.useState<string>("")
  React.useEffect(()=>{
    const hide=async()=>{
      await BootSplash.hide({fade:true})
    }
    hide()
  },[])
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backBtnContainer}>
        <Image source={require("../../assets/arrow-left.png")}/>
        
      </View>
      <View style={styles.contentContainer}>
        <CustomText type="primary" content="Hello Again"/>
        <CustomText type='secondary'  content="Welcome back you have been missed"  styles={{textAlign:"center"}}/>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputInnerContainer}>
          <View style={styles.iconContainer}>
            <Image source={require("../../assets/phone.png")} />
          </View>
          <View style={{flex:0.9}}>
          <CustomInputs placeholder='+1 xxxx xxxx xxxx' styles={{ borderTopRightRadius:10,borderBottomRightRadius:10,color:Theme.textPrimary}} onChange={setMobile}/>
          </View>
        </View>
      </View>
      <View style={styles.btnContainer}>
      <CustomButton text='Sign In' callBack={()=>onClickSignIn(mobile)} />
      </View> 

      <View style={{flex:0.3}}></View>
      <View style={styles.termContainer}>
        <Text style={styles.termText}>By sign in, I accept the Terms of Service and Community Guidelines and have read Privacy Policy.</Text>
      </View>
      
    </SafeAreaView>
  )
}

export default LoginScreen