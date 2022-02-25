import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'

export default function PersonilasationButton({text, onPress, selected}) {
  return (
    <TouchableOpacity 
      style={[styles.container, selected? styles.selected : styles.notSelected]}
      onPress={onPress}
    > 
      <Text style={[styles.text, selected? styles.selectText: styles.notSelectText]}>{text}</Text>
    </TouchableOpacity>
  )
}