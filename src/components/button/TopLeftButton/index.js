import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import { Ionicons } from '@expo/vector-icons';
export default function TopLeftButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <Ionicons name="md-chevron-back" size={24} color="black" />
    </TouchableOpacity>
  )
}