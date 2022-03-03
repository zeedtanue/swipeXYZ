import { View, Text } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import TopHeader from '../../../components/message/header'
import InboxPerson from '../../../components/message/InboxPerson'

export default function MessageHome({navigation}) {
  const [data, setData] = useState([
    {name: 'Nicolas',status: 'online', text: 'Superb', time: '05:01', image: require('../../../../assets/person2.png')},
    {name: 'Ashley', status: 'offline',text: 'Satisfied with your product?', time: '04:01', image: require('../../../../assets/person2.png')},
    {name: 'Tamzeed',status:'online', text: 'See you at 5', time: '02:01', image: require('../../../../assets/person.png')},

  ])
  return (
    <View style={styles.container}>
        <TopHeader/>
        <View>
          <View style={styles.contentContainer}>
            {data.map(item=> 
              <InboxPerson 
                onPress={()=>navigation.navigate('messageDetails', item)}
                data={item}/>
              
              )}
          </View>
        </View>
    </View>
  )
}