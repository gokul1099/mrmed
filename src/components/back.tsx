import { View, Text ,Pressable, Image} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Theme } from '../utils/theme'



const BackButton = () => {
    const navigation = useNavigation()
  return (
    <Pressable onPress={()=>navigation.goBack()} style={{padding:10}}>
        {/* <Text style={{color:Theme.textPrimary}}>Back</Text> */}
        <Image source={require("../assets/arrow-left.png")} />
    </Pressable>
  )
}

export default BackButton