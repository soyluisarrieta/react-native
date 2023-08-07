import { StyleSheet, Text, View } from 'react-native'

function RepositoryItem ({ item }) {
  const {
    id,
    fullName,
    description,
    language,
    stargazersCount,
    forksCount,
    reviewCount,
    ratingAverage
  } = item
  return (
    <View key={id} style={styles.container}>
      <Text style={styles.strong}>Id: {id}</Text>
      <Text>FullName: {fullName}</Text>
      <Text>Description: {description}</Text>
      <Text>Language: {language}</Text>
      <Text>Stars: {stargazersCount}</Text>
      <Text>Forks: {forksCount}</Text>
      <Text>Review: {reviewCount}</Text>
      <Text>Rating: {ratingAverage}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5
  },
  strong: {
    color: '#e53',
    fontWeight: 'bold',
    marginBottom: 5
  }
})

export default RepositoryItem
