/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{useReducer} from 'react';
import {Text,SafeAreaView} from "react-native"

type State = {
  todos: []
}
type Action = {type: "increment"} | {type:"decrement"} 
const App =()=>{

  return(
    <SafeAreaView>
      <Text>jee</Text>
    </SafeAreaView>
  )
}

export default App;
