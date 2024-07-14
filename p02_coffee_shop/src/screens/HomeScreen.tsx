import { ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { coffeeAppStore } from '../store/store'
import { getCategoriesFromData } from '../utils/getCategoriesFromData'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme'
import HeaderBar from '../components/HeaderBar'
import CustomIcon from '../components/CustomIcon'

const getFilteredCoffee = (category: string, data: any) => (
  category !== 'Todas'
    ? data.filter((item: any) => item.name === category)
    : data
)

export default function HomeScreen () {
  const { CoffeeList, BeanList } = coffeeAppStore()

  const [categories, setCategories] = useState(getCategoriesFromData(CoffeeList))
  const [searchText, setSearchText] = useState('')
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
        {/* App Header */}
        <HeaderBar />

        <Text style={styles.ScreenTitle}>
          Encuentra el mejor{'\n'}
          café para ti
        </Text>

        {/* Search input */}
        <View style={styles.InputContainerComponent}>
          <TouchableOpacity>
            <CustomIcon
              name="search"
              size={FONTSIZE.size_18}
              style={styles.InputIcon}
              color={
                searchText.length > 0
                  ? COLORS.primaryOrangeHex
                  : COLORS.primaryLightGreyHex
              }
            />
          </TouchableOpacity>
          <TextInput
            placeholder="Find Your Coffee..."
            value={searchText}
            onChange={text => setSearchText(text)}
            placeholderTextColor={COLORS.primaryLightGreyHex}
            style={styles.TextInputContainer}
          />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex
  },
  ScrollViewFlex: {
    flexGrow: 1
  },
  ScreenTitle: {
    fontSize: FONTSIZE.size_28,
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryWhiteHex,
    paddingLeft: SPACING.space_30
  },
  InputContainerComponent: {
    flexDirection: 'row',
    margin: SPACING.space_30,
    borderRadius: BORDERRADIUS.radius_20,
    backgroundColor: COLORS.primaryDarkGreyHex,
    alignItems: 'center'
  },
  InputIcon: {
    marginHorizontal: SPACING.space_20
  },
  TextInputContainer: {
    flex: 1,
    height: SPACING.space_20 * 3,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex
  }
})
