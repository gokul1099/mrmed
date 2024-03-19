/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{useReducer} from 'react';
import {Text,SafeAreaView} from "react-native"
import LoginContainer from './src/screens/login/login-container';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainNavigator from './src/navigator/main-navigator';
const App =()=>{

  return(
    <SafeAreaProvider>
      <MainNavigator />
    </SafeAreaProvider>
  )
}

export default App;
