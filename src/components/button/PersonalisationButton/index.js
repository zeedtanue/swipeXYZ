import { View, Text } from 'react-native'
import React from 'react'

export default function PersonilasationButton({text}) {
  return (
    <View style={{ borderWidth:.2, padding: 10, borderRadius:20, width:100, maxHeight: 200, margin: 10 }}> 
      <Text style={{ alignSelf:'center', fontWeight:'bold' }}>{text}</Text>
    </View>
  )
}