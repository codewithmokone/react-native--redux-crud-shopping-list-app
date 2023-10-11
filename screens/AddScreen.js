import { View, Text, TouchableOpacity, SafeAreaView, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/Slices/AddDataSlice';

export default function AddScreen() {
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [quantity, setQuantity] = useState('');

  const dispatch = useDispatch()

  const handleAdd = async (e) => {
    e.preventDefault()

    dispatch(addItem({
      title: itemName,
      description: itemDescription,
      quantity: quantity
    }))

  }

  return (
    <SafeAreaView>
      <View>
        <View style={{ marginHorizontal: 6 }}>
          <Text>Add New Item</Text>
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <TextInput
            onChangeText={(text) => setItemName(text)}
            placeholder=' Item name'
            style={{ borderWidth: 1, height: 40, borderRadius: 5, marginVertical: 10 }}
          />
          <TextInput
            onChangeText={(text) => setItemDescription(text)}
            placeholder=' Item description'
            style={{ borderWidth: 1, height: 40, borderRadius: 5, marginVertical: 10 }}
          />
          <TextInput
            onChangeText={(text) => setQuantity(text)}
            placeholder=' Quantity'
            style={{ borderWidth: 1, height: 40, borderRadius: 5, marginVertical: 10 }}
          />
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <TouchableOpacity
            onPress={handleAdd}
            style={{ backgroundColor: 'blue', height: 40, borderRadius: 5, marginVertical: 5, alignItems: 'center', justifyContent: 'center' }}
          >
            <Text style={{ color: 'white' }}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}