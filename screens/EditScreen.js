import { View, Text, TouchableOpacity, TextInput, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { updateFirestoreDocument } from '../redux/Slices/updateSlice';


export default function EditScreen() {

    const { params } = useRoute();
    let item = params;

    const dispatch = useDispatch()
    const navigation = useNavigation()

    const [itemName, setItemName] = useState(item.title);
    const [itemDescription, setItemDescription] = useState(item.description);
    const [quantity, setQuantity] = useState(item.quantity);

    // Handle the update function
    const handleUpdate = (e) => {
        e.preventDefault()

        const updatedItem = {
            id: item.id,
            data: {
                title: itemName,
                description: itemDescription,
                quantity: quantity
            }
        }
        dispatch(updateFirestoreDocument(updatedItem));
        navigation.navigate('Home')
    }

    return (
        <SafeAreaView>
            <View style={{ marginHorizontal: 10, marginVertical: 15, alignItems: 'center' }}>
                <Text style={{ fontSize: 24 }}>Update Item</Text>
            </View>
            <View style={{ marginHorizontal: 10, marginVertical: 5 }}>
                <TextInput
                    value={itemName}
                    onChangeText={(text) => setItemName(text)}
                    style={{ height: 40, borderWidth: 1, marginVertical: 5, borderRadius: 10 }}
                    placeholder='  item Name'
                />
                <TextInput
                  value={itemDescription}
                    onChangeText={(text) => setItemDescription(text)}
                    style={{ height: 40, borderWidth: 1, marginVertical: 5, borderRadius: 10 }}
                    placeholder='  item Description'
                />
                <TextInput
                  value={quantity}
                    onChangeText={(text) => setQuantity(text)}
                    style={{ height: 40, borderWidth: 1, marginVertical: 5, borderRadius: 10 }}
                    placeholder='  Quantity'
                />
            </View>
            <View style={{ marginHorizontal: 10, marginVertical: 5, alignItems: "center" }}>
                <TouchableOpacity
                    onPress={handleUpdate}
                    style={{ width: 200, height: 40, backgroundColor: '#657AFF', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}
                >
                    <Text style={{ color: 'white' }}>Update</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}