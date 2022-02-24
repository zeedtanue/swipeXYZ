import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import { Entypo } from '@expo/vector-icons';

export default function CrossTopButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <Entypo name="cross" size={24} color="black" />
    </TouchableOpacity>
  )
}