import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet } from 'react-native'
import HomeScreen from '../screens/HomeScreen'
import CartScreen from '../screens/CartScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import OrderHistoryScreen from '../screens/OrderHistoryScreen'

const Tab = createBottomTabNavigator()

export default function TabNavigator () {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        headerShown: false
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Favorite" component={FavoritesScreen} />
      <Tab.Screen name="History" component={OrderHistoryScreen} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})
