import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { TextInput } from 'react-native-paper'
import CrossTopButton from '../../../components/button/crossTopBar'

export default function ForgotPassword({ navigation }) {
    const [email, setEmail] = useState('')
    const handleButton= () => {
        navigation.navigate('confirmationEmail')
    }
  return (
    <View style={styles.container}>
      <CrossTopButton onPress={()=>navigation.goBack()}/>

      <Text style={styles.title}>Forgot Password?</Text>
      <Text style={styles.subTitle}>Enter your email to recieve an link to reset your password</Text>

      <View>
        <TextInput
          style= {styles.input}
          label='Email'
          outlineColor='#0404151A'
          placeholderTextColor='#0404151A'
          activeOutlineColor='#0404151A'
          mode='outlined'
          onChangeText={(text) => setEmail(text)}
          secureTextEntry

        />
        <TouchableOpacity style={styles.buttonOrrange} onPress={()=>handleButton()}>
          <Text style={styles.buttonText}>Confirm</Text>
      </TouchableOpacity>
      </View>

    </View>
  )
}