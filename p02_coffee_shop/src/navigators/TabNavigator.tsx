import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet } from 'react-native'
import HomeScreen from '../screens/HomeScreen'
import CartScreen from '../screens/CartScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import OrderHistoryScreen from '../screens/OrderHistoryScreen'
import { COLORS } from '../theme/theme'
import { BlurView } from '@react-native-community/blur'
import Customicon from '../components/CustomIcon'

const Tab = createBottomTabNavigator()

const IconButtonTab = ({name,focused}: {name: string, focused: boolean}) => (
  <Customicon
    name={name}
    size={25}
    color={ focused ? COLORS.primaryOrangeHex: COLORS.primaryLightGreyHex }
  />
)

export default function TabNavigator () {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarBackground: () => (
          <BlurView
            overlayColor=""
            blurAmount={15}
            style={styles.BlurViewStyles}
          />
        )
      }}
    >
      <Tab.Screen 
        name="Home"
        component={HomeScreen} 
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            IconButtonTab({ name: 'home', focused })
          )
        }}
      />
      <Tab.Screen 
        name="Cart"
        component={CartScreen} 
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            IconButtonTab({ name: 'cart', focused })
          )
        }}
      />
      <Tab.Screen 
        name="Favorite"
        component={FavoritesScreen} 
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            IconButtonTab({ name: 'like', focused })
          )
        }}
      />
      <Tab.Screen 
        name="History"
        component={OrderHistoryScreen} 
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            IconButtonTab({ name: 'bell', focused })
          )
        }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    position: 'absolute',
    backgroundColor: COLORS.primaryBlackRGBA,
    borderTopWidth: 0,
    borderTopColor: 'transparent',
    elevation: 0
  },
  BlurViewStyles: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  }
})
