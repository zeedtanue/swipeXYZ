import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import MessageHome from '../../screens/message/home'

const { Screen, Navigator } = createStackNavigator()
export default function MessageNav() {
  return (
      <Navigator screenOptions={{
          headerShown: false
      }}>
        <Screen name='messageHome' component={MessageHome} />
          
      </Navigator>
    )
}