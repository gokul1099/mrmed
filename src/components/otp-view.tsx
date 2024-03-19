import { View, Text, TextInput, StyleSheet, Alert } from 'react-native'
import React,{useRef,useImperativeHandle} from 'react'
import { Theme } from '../utils/theme'
import { useNavigation, useRoute } from '@react-navigation/native'



const OtpView =React.forwardRef((props,ref) => {
    const [otp,setOtp] = React.useState<string[]>([])
    const inputRefs = [useRef(),useRef(),useRef(),useRef(),useRef(),useRef()]
    const navigation  = useNavigation()
    const route= useRoute()
    const onChangeInput=(index: number,text: string)=>{
        if(text==""){
            let temp = otp
            temp.pop()
            setOtp([...temp])
            inputRefs[index-1]?.current.focus()
        }else{
        setOtp(prev=>[...prev,text])
        if(index == 5){
            let temp = otp.join("") + text
            if(temp === "123456"){
                navigation.navigate("otpverified",{mobile:route?.params?.mobile})
            }else{
                Alert.alert('Incorrect Otp', 'The Otp you entered is incorrect', [
                    {text: 'OK', onPress: () => {
                        setOtp([])
                        inputRefs[0].current.focus()
                        }},
                  ]);
                              
            }
        }else if(index>=0 && index<=5){
            inputRefs[index+1]?.current.focus()
        }
    }
    }
    useImperativeHandle(ref,()=>{
        submit:()=>{
            if(otp.length === 5 && otp.join("") === "123456"){
                navigation.navigate("otpverified",{mobile:route?.params?.mobile})
            }else{
                Alert.alert('Incorrect Otp', 'The Otp you entered is incorrect', [
                    {text: 'OK', onPress: () => {
                        setOtp([])
                        inputRefs[0].current.focus()
                        }},
                  ]);
            }
        }
    })
  return (
    <View style={style.container}>
      {
        inputRefs?.map((_,index:number)=>{
            return(
                <TextInput 
                ref={inputRefs[index]} 
                key={index}
                style={[style.input,{borderColor:inputRefs[index]?.current?.isFocused() ? Theme.btnColot : Theme.secondary}]}
                maxLength={1}
                onChangeText={(text)=>onChangeInput(index,text)}
                keyboardType="phone-pad"
                value={otp[index]}
                returnKeyType='done'
                />
            )
        })
      }
      
    </View>
  )
})

const style = StyleSheet.create({
    input:{
        borderWidth:1,
        backgroundColor:Theme.secondary,
        width:50,
        height:50,
        padding:10,
        margin:2,
        color: Theme.textPrimary,
        textAlign:"center",
        fontWeight:"bold",
        fontSize:20,
        borderRadius:15
    },
    container:{
        flex:1,
        flexDirection:"row",
        padding:50,
        justifyContent:"center",
        alignItems:"center"
    }
})
export default OtpView