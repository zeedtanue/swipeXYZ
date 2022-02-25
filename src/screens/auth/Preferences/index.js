import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import TopLeftButton from '../../../components/button/TopLeftButton'
import PersonilasationButton from '../../../components/button/PersonalisationButton'

export default function Preferences({ navigation }) {
  const [isSelectTravel, setIsSelectTravel] = useState(false)
  const [isSelectBusiness, setIsSelectBusiness] = useState(false)
  const [isSelectTechnology, setIsSelectTechnology] = useState(false)
  const [isSelectMedia, setIsSelectMedia] = useState(false)
  const [isSelectMusic, setIsSelectMusic] = useState(false)

  return (
    <View style={styles.container}>
     <TopLeftButton onPress={()=>navigation.goBack()}/>
     <Text style={styles.title}>Personalisation</Text>
     <Text style={styles.subTitle}>Anther great thing about art poster is that they come in such a large variety.</Text>
     <View style={styles.row}>
       <PersonilasationButton 
         selected={isSelectTechnology} 
         onPress={()=>isSelectTechnology? setIsSelectTechnology(false): setIsSelectTechnology(true)} 
         text="Technology"/>
       <PersonilasationButton 
         selected={isSelectTravel} 
         onPress={()=>isSelectTravel? setIsSelectTravel(false): setIsSelectTravel(true)} 
         text="Travel"/>
        
       <PersonilasationButton 
         selected={isSelectMedia} 
         onPress={()=>isSelectMedia? setIsSelectMedia(false): setIsSelectMedia(true)} 
         text="Media"/>
       <PersonilasationButton text="Music"/>


     </View>
     <View style={styles.row}>
       <PersonilasationButton 
         selected={isSelectBusiness} 
         onPress={()=>isSelectBusiness? setIsSelectBusiness(false): setIsSelectBusiness(true)} 
         text="Business & Work"/>
       <PersonilasationButton 
         selected={isSelectBusiness} 
         onPress={()=>isSelectBusiness? setIsSelectBusiness(false): setIsSelectBusiness(true)} 
         text="Sport"/>
      <PersonilasationButton 
         selected={isSelectBusiness} 
         onPress={()=>isSelectBusiness? setIsSelectBusiness(false): setIsSelectBusiness(true)} 
         text="Design"/>

     </View>
    
     <View style={styles.row}>
       <PersonilasationButton 
         selected={isSelectBusiness} 
         onPress={()=>isSelectBusiness? setIsSelectBusiness(false): setIsSelectBusiness(true)} 
         text="Art & Culture"/>
       <PersonilasationButton 
         selected={isSelectBusiness} 
         onPress={()=>isSelectBusiness? setIsSelectBusiness(false): setIsSelectBusiness(true)} 
         text="Health"/>
      <PersonilasationButton 
         selected={isSelectBusiness} 
         onPress={()=>isSelectBusiness? setIsSelectBusiness(false): setIsSelectBusiness(true)} 
         text="Photography"/>
     </View>

     <View style={styles.row}>
       <PersonilasationButton 
         selected={isSelectBusiness} 
         onPress={()=>isSelectBusiness? setIsSelectBusiness(false): setIsSelectBusiness(true)} 
         text="Fashion"/>
       <PersonilasationButton 
         selected={isSelectBusiness} 
         onPress={()=>isSelectBusiness? setIsSelectBusiness(false): setIsSelectBusiness(true)} 
         text="Animation"/>
     </View>
    

     <TouchableOpacity style={styles.buttonOrrange} onPress={()=>handleRegister()}>
          <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity>
    </View>
  )
}
