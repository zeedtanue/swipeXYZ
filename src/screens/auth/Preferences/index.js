import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import TopLeftButton from '../../../components/button/TopLeftButton'
import PersonilasationButton from '../../../components/button/PersonalisationButton'

export default function Preferences({ navigation }) {
  return (
    <View style={styles.container}>
     <TopLeftButton onPress={()=>navigation.goBack()}/>
     <Text style={styles.title}>Personalisation</Text>
     <Text style={styles.subTitle}>Anther great thing about art poster is that they come in such a large variety.</Text>
     <View style={styles.row}>
       <PersonilasationButton text="Travel"/>
       <PersonilasationButton text="Business"/>

     </View>
     <TouchableOpacity style={styles.buttonOrrange} onPress={()=>handleRegister()}>
          <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity>
    </View>
  )
}
