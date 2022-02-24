import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { TextInput } from 'react-native-paper'
import { useDispatch } from 'react-redux'
import { register } from '../../../redux/actions/auth'
export default function SignUp() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const dispatch = useDispatch()

  const handleRegister = () => {
      dispatch(register(email,password)).then(()=>{
          console.log('success register')
      })
  }
  return (

    <View style={styles.container}>
      <Text style={styles.title}> Getting Started</Text>
      <Text style={styles.subTitle}> Create an account to {"\n"} continue!</Text>
      <TextInput
        onChangeText={(text) => setEmail(text)}
        style= {styles.input}
        label='Email'
        outlineColor='#0404151A'
        placeholderTextColor='#0404151A'
        activeOutlineColor='#0404151A'
        mode='outlined'
      />
      <TextInput
        onChangeText={(text) => setPassword(text)}
        style= {styles.input}
        label='Email'
        outlineColor='#0404151A'
        placeholderTextColor='#0404151A'
        activeOutlineColor='#0404151A'
        mode='outlined'
        secureTextEntry

      />
      <TouchableOpacity style={styles.buttonOrrange} onPress={()=>handleRegister()}>
          <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

    </View>
  )
}


