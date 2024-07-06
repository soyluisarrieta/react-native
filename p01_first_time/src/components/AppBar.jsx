import Constants from 'expo-constants'
import { ScrollView, StyleSheet, View } from 'react-native'
import StyledText from './StyledText'
import theme from '../theme.js'
import { Link, useLocation } from 'react-router-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.appBar.bgColor,
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 10
  },
  scroll: {
    paddingBottom: 15
  }
})

function AppBarTab ({ children, to }) {
  const { pathname } = useLocation()
  const isActive = pathname === to
  return (
    <Link to={to}>
      <StyledText
        fontWeight='bold'
        color={isActive ? 'primary' : 'muted'}
        style={{ paddingHorizontal: 10 }}
      >
        {children}
      </StyledText>

    </Link>
  )
}

function AppBar () {
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scroll}>
        <AppBarTab to='/'>Repositories</AppBarTab>
        <AppBarTab to='/signin'>Sign In</AppBarTab>
      </ScrollView>
    </View>
  )
}

export default AppBar
