import { View, Text, TouchableOpacity, TextInput, SafeAreaView } from 'react-native'
import React, { useState } from 'react'

export default function EditScreen({item}) {

    const [itemName, setItemName] = useState(item.title);
    const [itemDescription, setItemDescription] = useState(item.description);
    const [quantity, setQuantity] = useState(item.quantity);

    return (
        <SafeAreaView>
            <View style={{ marginHorizontal: 10, marginVertical: 15, alignItems: 'center' }}>
                <Text style={{ fontSize: 24 }}>Update Item</Text>
            </View>
            <View style={{ marginHorizontal: 10, marginVertical: 5 }}>
                <TextInput
                    value={itemName}
                    onChange={(text) => setItemName(text)}
                    style={{ height: 40, borderWidth: 1, marginVertical: 5, borderRadius: 10 }}
                    placeholder='  item Name'
                />
                <TextInput
                  value={itemDescription}
                    onChange={(text) => setItemDescription(text)}
                    style={{ height: 40, borderWidth: 1, marginVertical: 5, borderRadius: 10 }}
                    placeholder='  item Description'
                />
                <TextInput
                  value={quantity}
                    onChange={(text) => setQuantity(text)}
                    style={{ height: 40, borderWidth: 1, marginVertical: 5, borderRadius: 10 }}
                    placeholder='  Quantity'
                />
            </View>
            <View style={{ marginHorizontal: 10, marginVertical: 5, alignItems: "center" }}>
                <TouchableOpacity
                    style={{ width: 200, height: 40, backgroundColor: 'blue', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}
                >
                    <Text style={{ color: 'white' }}>Update</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}