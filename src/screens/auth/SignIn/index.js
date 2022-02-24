import { View, Text, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import styles from './styles'
import { TextInput } from 'react-native-paper'
import { login } from '../../../redux/actions/auth'
import { useDispatch } from 'react-redux'
export default function SignIn() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const dispatch = useDispatch()

  const handleLogin = () => {
      dispatch(login(email,password)).then(()=>{
          console.log('success login')
      })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Let’s Sign You In</Text>
      <Text style={styles.subTitle}> Welcome back, you’ve {"\n"} been missed!</Text>
      <TextInput
        style= {styles.input}
        label='Email'
        outlineColor='#0404151A'
        placeholderTextColor='#0404151A'
        activeOutlineColor='#0404151A'
        mode='outlined'
        onChangeText={(text) => setEmail(text)}

      />
      <TextInput
        style= {styles.input}
        label='Password'
        outlineColor='#0404151A'
        placeholderTextColor='#0404151A'
        activeOutlineColor='#0404151A'
        mode='outlined'
        onChangeText={(text) => setPassword(text)}
        secureTextEntry

      />
      <TouchableOpacity style={styles.buttonOrrange} onPress={()=>handleLogin()}>
          <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

    </View>
  )
}