import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Welcome from '../../screens/auth/welcome'
import SignIn from '../../screens/auth/SignIn'
import SignUp from '../../screens/auth/SignUp'
import ForgotPassword from '../../screens/auth/ForgotPassword'
import ConfirmEmailScreen from '../../screens/auth/ConfirmEmail'
import Preferences from '../../screens/auth/Preferences'

const { Screen, Navigator } = createStackNavigator()
export default function AuthNav() {
  return (
      <Navigator screenOptions={{
          headerShown: false
      }}>
          <Screen name='welcome' component={Welcome}/>
          <Screen name='signin' component={SignIn}/>
          <Screen name='signup' component={SignUp}/>
          <Screen name='forgotPassword' component={ForgotPassword}/>
          <Screen name='confirmationEmail' component={ConfirmEmailScreen}/>
          <Screen name='preferences' component={Preferences}/>
      </Navigator>
    )
}