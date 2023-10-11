import { View, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React from 'react'
import ListCard from '../components/ListCard'
import { useNavigation } from '@react-navigation/native'

export default function HomeScreen() {

  const navigation = useNavigation()

  return (
    <View style={{ flex: 1 }}>
      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <Text style={{ fontSize: 24, color: '#4F5578' }}>Shopping List</Text>
      </View>
      <View style={{ alignItems: 'center', marginVertical: 20 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Add')}
          style={{ backgroundColor: '#657AFF', height: 40, width: 200, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}
        >
          <Text style={{ color: '#E4F1FA' }}>Add new item</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={{ flexDirection: 'column' }}>
          <ListCard />
        </View>
      </ScrollView>
    </View>
  )
}