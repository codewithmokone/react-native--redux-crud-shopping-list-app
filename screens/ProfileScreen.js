import { View, Text, Image } from 'react-native'
import React from 'react'

export default function ProfileScreen() {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
      <Text>Page 404!</Text>
      <Image style={{width: 100, height: 100, marginTop: 20}} source={require('../assets/images/construction.png')} />
    </View>
  )
}
