import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import * as Icon from "react-native-feather";
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/Slices/fetchDataSlice';
import { deleteItem } from '../redux/Slices/AddDataSlice';

export default function ListCard() {

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.data);

  const handleEdit = id => {
    const [item] = data.filter(item => item.id === id);
    navigation.navigate('Edit', item)

  }

  const handleDelete = id => {
    dispatch(deleteItem({id: id}))
  }

  useEffect(() => {
    dispatch(fetchData());
  }, [])

  return (
    <View>
      {
        data && data.map(item => (
          <View key={item.id}  style={styles.container}>
            <View style={{ flexDirection: 'column', marginLeft: 15 }}>
              <Text style={{ marginTop: 7, marginBottom: 4, fontSize: 18 }}>{item.title}</Text>
              <Text style={{ marginVertical: 4 }}>{item.description}</Text>
            </View>
            <View style={styles.buttonSection}>
              <Text style={{ marginRight: 30 }}>{item.quantity}</Text>
              <TouchableOpacity
                style={{ marginRight: 10 }}
                onPress={() => handleEdit(item.id)}
              >
                <Icon.Edit strokeWidth={2} stroke='#657AFF'/>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleDelete(item.id)}
              >
                <Icon.Delete strokeWidth={2} stroke='#657AFF' />
              </TouchableOpacity>
            </View>
          </View>
        ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 65,
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 15,
    shadowOffset: { width: -2, height: 4 },
    shadowColor: '#657AFF',
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  buttonSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15
  }
})

