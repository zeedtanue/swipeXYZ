import { View, Text, Image } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { Feather } from '@expo/vector-icons';
import CameraScreen from '../../screens/camera';
import ProfileScreen from '../../screens/profile';
import firebase from 'firebase';
import MessageNav from '../message';

const Tab = createMaterialBottomTabNavigator()


const emptyScreen = () => {
    return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Under Construction</Text>
    </View>
    )
}



export default function HomeScreen() {
  return (
    <Tab.Navigator 
        barStyle={{ backgroundColor: 'white'}}
        initialRouteName='feed'
        labeled= {false}
    >
        <Tab.Screen 
            name='feed'
            component= {emptyScreen}
            options={{
                tabBarIcon: ({ color }) => ( <Feather name="home" size={24} color={color} /> )
                
            }}
        />
        <Tab.Screen 
            name='explore'
            component= {emptyScreen}
            options={{
                tabBarIcon: ({ color }) => ( <Feather name="compass" size={24} color={color} /> )
            }}
        />
        <Tab.Screen 
            name='post'
            component= {CameraScreen}
            options={{
                tabBarIcon: ({ color }) => ( <Feather name="plus-circle" size={24} color={color} /> )
                
            }}
        />
        <Tab.Screen 
            name='message'
            component= {MessageNav}
            options={{
                tabBarIcon: ({ color }) => ( <Feather name="message-square" size={24} color={color} /> )
                
            }}
        />
        <Tab.Screen 
            name='market'
            component= {ProfileScreen}
            options={{
                tabBarIcon: ({ color }) => ( <Feather name="shopping-bag" size={24} color={color} /> )
                
            }}
            initialParams={{initialUserId: firebase.auth().currentUser.uid }}
        />
    </Tab.Navigator>
  )
}