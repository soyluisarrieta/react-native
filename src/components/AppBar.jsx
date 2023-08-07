import Constants from 'expo-constants'
import { StyleSheet, View } from 'react-native'
import StyledText from './StyledText'
import theme from '../theme.js'

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.appBar.bgColor,
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 10,
    paddingHorizontal: 10
  },
  text: {
    color: theme.appBar.textColor
  }
})

function AppBar () {
  return (
    <View style={styles.container}>
      <StyledText fontWeight='bold' style={styles.text}>
        Repositories
      </StyledText>
    </View>
  )
}

export default AppBar
