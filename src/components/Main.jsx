import Constants from 'expo-constants'
import { Text, View } from 'react-native'
import RepositoryList from './RepositoryList'

function Main () {
  return (
    <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1 }}>
      <Text>Repositorio</Text>
      <RepositoryList />
    </View>
  )
}

export default Main
