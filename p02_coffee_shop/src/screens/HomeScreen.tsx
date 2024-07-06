import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { coffeeAppStore } from '../store/store'
import { getCategoriesFromData } from '../utils/getCategoriesFromData'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { COLORS } from '../theme/theme'
import HeaderBar from '../components/HeaderBar'

const getFilteredCoffee = (category: string, data: any) => (
  category !== 'Todas'
    ? data.filter((item: any) => item.name === category)
    : data
)

export default function HomeScreen () {
  const { CoffeeList, BeanList } = coffeeAppStore()

  const [categories, setCategories] = useState(getCategoriesFromData(CoffeeList))
  const [searchText, setSearchText] = useState(undefined)
  const [categoryIndex, setCategoryIndex] = useState({ index: 0, category: categories[0] })
  const [sortedCoffee, setSortedCoffee] = useState(getFilteredCoffee(categoryIndex.category, CoffeeList))

  const tabBarHeight = useBottomTabBarHeight()

  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.secondaryGreyHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}
      >
        <HeaderBar title="Hola mundo" />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.secondaryGreyHex
  },
  ScrollViewFlex: {
  }
})
