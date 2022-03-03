import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { Feather, Ionicons, AntDesign } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput } from 'react-native-paper';
export default function MessageDetais({ route }) {

  const param = route.params
  const [sentText, setSentText] = useState("")
  const [lastText, setLastText] = useState("")
  console.log(param)
  return (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
            <View>
            <Ionicons style={styles.goBack} name="ios-chevron-back" size={24} color="black" />
            </View>
            <Image style={styles.image} source={param.image}/>
            <View style={styles.headerTextContainer}>
                <Text style={styles.headerName}>
                    {param.name}
                </Text>
                <Text style={styles.status}>
                    {param.status}
                </Text>
            </View>
              <Feather style={styles.iconCall} name="phone" size={24} color="black" />
              <Ionicons style={styles.iconCall} name="videocam-outline" size={24} color="black" />
            <View>

            </View>
        </View>



       {/* 
       
         Message Container 
         
       */}

       <ScrollView style={styles.contentContainer}>
       <Text style={styles.recieveText}>{param.text}</Text>
       <Text style={styles.timeText}>{param.time}</Text>
       {lastText!==''?
        <Text style={styles.sendText}>
        Thank
        </Text>:null
       }
       

       </ScrollView>
       <View style={styles.footerConteiner}>

           <AntDesign style={styles.plusButton} name="plus" size={24} color="black    " />
           
            <TextInput
              style= {styles.input}
              label='Email'
              onChange={(text) => setSentText(text)}

      />
            <Ionicons onPress={()=> setLastText(sentText)} style={styles.sendIcon} name="ios-send" size={25} color="white" />
       </View>
    </View>
  )
}