import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import CrossTopButton from '../../../components/button/crossTopBar'

export default function ConfirmEmailScreen({ navigation }) {
  const handleButton= () => {
    navigation.navigate('welcome')
  }
  return (
    <View style={styles.container}>
      <CrossTopButton onPress={handleButton}/>

      <View style={styles.outerCircle  }>
          <View style={styles.innerCircle}>
              <Image style={styles.image} source={require('../../../../assets/icons/mail.png')}/>
          </View>
      </View>

      <Text style={styles.title}>Reset Password Email Sent</Text>
      <Text style={styles.subTitle}>Check your email to reset password and follow the instructions</Text>

      <TouchableOpacity style={styles.buttonOrrange} onPress={()=>handleButton()}>
        <Text style={styles.buttonText}>Confirm</Text>
      </TouchableOpacity>
      
    </View>
  )
}