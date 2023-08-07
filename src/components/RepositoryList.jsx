import { Text, FlatList } from 'react-native'
import repositories from '../data/repositories.js'
import RepositoryItem from './RepositoryItem.jsx'

function RepositoryList () {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={() => <Text />}
      renderItem={({ item }) => (
        <RepositoryItem {...item} />
      )}
    />
  )
}

export default RepositoryList
