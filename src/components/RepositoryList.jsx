import { Text, FlatList } from 'react-native'
import RepositoryItem from './RepositoryItem.jsx'
import useRepositories from '../hooks/useRepositories.js'

function RepositoryList () {
  const { repositories } = useRepositories()

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
