import React from 'react'
import HomeScreen from './screens/HomeScreen';
import AddScreen from './screens/AddScreen';
import EditScreen from './screens/EditScreen';
import * as Icon from "react-native-feather";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
    return (
        <Stack.Navigator initialRouteName="Home1">
            <Stack.Screen name="Home1" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Edit" component={EditScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName='Home'>
                <Tab.Screen name="Home" component={HomeStack} options={{
                    tabBarIcon: ({ }) => (
                        <View>
                            <Icon.Home strokeWidth={2} stroke='#657AFF' />
                        </View>
                    )
                }} />
                <Tab.Screen name="Add" component={AddScreen} options={{
                    tabBarIcon: ({ }) => (
                        <View style={{ top: -18, backgroundColor: '#657AFF', width: 60, height: 60, borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
                            <Icon.Plus strokeWidth={5} stroke='white' />
                        </View>
                    ), title: 'Add New Item',
                    backgroundColor: 'blue'
                }} />
                {/* <Tab.Screen name="Edit" component={EditScreen} /> */}
                <Tab.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{
                        tabBarIcon: ({ }) => (
                            <View>
                                <Icon.User strokeWidth={2} stroke='#657AFF' />
                            </View>
                        ),
                        title: 'Profile',
                        backgroundColor: 'blue'
                    }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}