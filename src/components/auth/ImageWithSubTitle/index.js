import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './style'

export default function ImageWithSubTitle({image, title, subTitle}) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>{subTitle}</Text>

      </View>
    </View>
  )
}