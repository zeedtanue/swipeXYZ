import React, { useState } from 'react'
import { Text, View } from 'react-native'
import AuthDetails from '../../components/auth/details'
import AuthMenu from '../../components/auth/menu'



const AuthScreen = () => {
  const [authPage, setAuthPage] = useState(0)
  const [ detailsPage, setDetailsPage] = useState(false)
  return (
    <View style={{flex:1}}>
        {detailsPage ? 
        <AuthDetails authPage={authPage} setDetailsPage={setDetailsPage}/>:
        <AuthMenu authPage={authPage} setAuthPage={setAuthPage} setDetailsPage={setDetailsPage} />
        }
        
    </View>
  )
}

export default AuthScreen