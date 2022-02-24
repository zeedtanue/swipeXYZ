import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userAuthStateListener } from '../../redux/actions/auth';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import AuthScreen from '../../screens/auth';
import HomeScreen from '../home';
import AuthNav from '../auth';
import SavePostScreen from '../../screens/savePost';
const Stack = createStackNavigator()

export default function Route() {
  const currentUserObject = useSelector(state => state.auth)


  const dispatch = useDispatch();

  useEffect(() => {
        dispatch(userAuthStateListener())
  }, [])

  if(!currentUserObject.loaded){
      return (
          <View>

          </View>
      )
  }
  return (
    <NavigationContainer>
        <Stack.Navigator>
            {currentUserObject.currentUser == null ? 
            <Stack.Screen name='auth' component={AuthNav} options={{headerShown : false}} />:
            <>
              <Stack.Screen name='home' component={HomeScreen} options={{headerShown : false}} />
              <Stack.Screen name='savePost' component={SavePostScreen} options={{headerShown: false}} />
            </>

        }
        </Stack.Navigator>
    </NavigationContainer>
  )
}