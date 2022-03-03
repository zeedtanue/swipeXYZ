import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import { Ionicons } from '@expo/vector-icons';
export default function TopHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Messages</Text>
      <Ionicons style={styles.icon} name="create-outline" size={26} color="black" />
    </View>
  )
}