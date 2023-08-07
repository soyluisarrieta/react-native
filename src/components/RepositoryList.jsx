import { View, Text, FlatList } from 'react-native'
import repositories from '../data/repositories.js'

function RepositoryList () {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={() => <Text />}
      renderItem={({ item: repo }) => (
        <View key={repo.id}>
          <Text>Id: {repo.id}</Text>
          <Text>FullName: {repo.fullName}</Text>
          <Text>Description: {repo.description}</Text>
          <Text>Language: {repo.language}</Text>
          <Text>Stars: {repo.stargazersCount}</Text>
          <Text>Forks: {repo.forksCount}</Text>
          <Text>Review: {repo.reviewCount}</Text>
          <Text>Rating: {repo.ratingAverage}</Text>
        </View>
      )}
    />
  )
}

export default RepositoryList
