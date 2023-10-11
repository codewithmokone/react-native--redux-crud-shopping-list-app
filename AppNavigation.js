import React from 'react'
import HomeScreen from './screens/HomeScreen';
import AddScreen from './screens/AddScreen';
import EditScreen from './screens/EditScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName='Home'>
                <Tab.Screen name="Home" component={HomeScreen} options={{ home: 3 }} />
                <Tab.Screen name="Add" component={AddScreen} />
                <Tab.Screen name="Edit" component={EditScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}