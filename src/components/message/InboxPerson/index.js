import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'

export default function InboxPerson({onPress, data}) {
  return (
    <TouchableOpacity 
      onPress={onPress}
      style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={data.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          {data.name}
        </Text>
        <Text style={styles.text}>{data.text}</Text> 

      </View>
        
      <View>
        <Text style={styles.text}>
            {data.time}
        </Text>
      </View>

      
    </TouchableOpacity>
  )
}