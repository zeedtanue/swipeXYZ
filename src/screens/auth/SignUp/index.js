import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { TextInput} from 'react-native-paper'
import { useDispatch } from 'react-redux'
import { register } from '../../../redux/actions/auth'
import CheckBox from 'react-native-check-box'
export default function SignUp({ navigation }) {

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [checked, setChecked] = React.useState(false);
  const [isSelected, setSelection] = useState(false);

  
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
        onChangeText={(text) => setName(text)}
        style= {styles.input}
        label='Your Name'
        outlineColor='#0404151A'
        placeholderTextColor='#0404151A'
        activeOutlineColor='#0404151A'
        mode='outlined'
      />
      <TextInput
        onChangeText={(text) => setPassword(text)}
        style= {styles.input}
        label='Password'
        outlineColor='#0404151A'
        placeholderTextColor='#0404151A'
        activeOutlineColor='#0404151A'
        mode='outlined'
        secureTextEntry
      />
      <View style={styles.checkboxContainer}>
        <CheckBox
        style={styles.checkbox}
        onClick={()=> isSelected?setSelection((false)) : setSelection((true))}
        isChecked={isSelected}
        />
        {/* <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        /> */}
        <View style={styles.row}>
          <Text style={styles.label}>You agree to our</Text>
          <Text style={{ color: '#F15223'  }}> Terms & Conditions</Text>
        </View>
      </View>



      <TouchableOpacity style={styles.buttonOrrange} onPress={()=>handleRegister()}>
          <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <View style={styles.row}>
        <Text>Already have an account?</Text>
        <Text 
          onPress={()=>navigation.navigate('signin')}
          style={{ color:'#F15223' }}>   Sign In</Text>
        </View>

    </View>
  )
}


