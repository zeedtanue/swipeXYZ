import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Welcome from '../../screens/auth/welcome'
import SignIn from '../../screens/auth/SignIn'
import SignUp from '../../screens/auth/SignUp'

const { Screen, Navigator } = createStackNavigator()
export default function AuthNav() {
  return (
      <Navigator screenOptions={{
          headerShown: false
      }}>
          <Screen name='welcome' component={Welcome}/>
          <Screen name='signin' component={SignIn}/>
          <Screen name='signup' component={SignUp}/>
      </Navigator>
    )
}