import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import ImageWithSubTitle from '../../../components/auth/ImageWithSubTitle'

export default function Welcome({navigation}) {
  
  const handleSignIn = () => {
      navigation.navigate('signin')
  }
  const handleSignUp = () => {
    navigation.navigate('signup')
  }

  return (
    <View style={styles.container}>
        
      <View style={styles.imageContainer}>
        <ImageWithSubTitle 
          image={require('../../../../assets/onboarding_second.png')}
          title= 'Building Better Workplaces One Team at a Time'
          subTitle='Create a unique emotional story that describes better than words'
        />
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonOrrange} onPress={handleSignIn}>
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonWhite} onPress={handleSignUp}>
                <Text style={styles.buttonTextBlack}>Sign Up</Text>
            </TouchableOpacity>
        </View>
        
      </View>
      
      
    </View>
  )
}