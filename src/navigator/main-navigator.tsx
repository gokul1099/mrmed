import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginContainer from '../screens/login/login-container';
import VerifyContainer from '../screens/verify-otp/verify-container';
import OtpVerifiedContainer from '../screens/otp-verified/vefified-container';

const Stack = createNativeStackNavigator();

function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginContainer} options={{headerShown:false}} />
        <Stack.Screen name='verify' component={VerifyContainer} options={{headerShown:false}}/>
        <Stack.Screen name='otpverified' component={OtpVerifiedContainer} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default MainNavigator