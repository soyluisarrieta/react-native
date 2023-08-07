import { View, Text } from 'react-native'
import repositories from '../data/repositories.js'

function RepositoryList () {
  return (
    <View>
      {repositories.map(repo => (
        <View key={repo.id}>
          <Text>{repo.fullName}</Text>
          <Text>{repo.description}</Text>
        </View>
      ))}
    </View>
  )
}

export default RepositoryList
