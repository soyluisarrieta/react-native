import { Text, FlatList } from 'react-native'
import RepositoryItem from './RepositoryItem.jsx'
import useRepositories from '../hooks/useRepositories.js'

function RepositoryList () {
  const { repositories } = useRepositories()

  return repositories
    ? (<FlatList
        data={repositories}
        ItemSeparatorComponent={() => <Text />}
        renderItem={({ item }) => (
          <RepositoryItem {...item} />
        )}
       />)
    : (<Text style={{ textAlign: 'center', marginTop: 10 }}>No repositories found...</Text>)
}

export default RepositoryList
