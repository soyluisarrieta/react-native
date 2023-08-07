import Constants from 'expo-constants'
import { Text, View } from 'react-native'

function Main () {
  return (
    <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1 }}>
      <Text>Hello World! I am a first app</Text>
    </View>
  )
}

export default Main
