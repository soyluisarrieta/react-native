import { StyleSheet, View } from 'react-native'
import StyledText from './StyledText'

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
      <StyledText bold>Id: {id}</StyledText>
      <StyledText orange>FullName: {fullName}</StyledText>
      <StyledText bold>Description: {description}</StyledText>
      <StyledText orange>Language: {language}</StyledText>
      <StyledText small>Stars: {stargazersCount}</StyledText>
      <StyledText small>Forks: {forksCount}</StyledText>
      <StyledText small>Review: {reviewCount}</StyledText>
      <StyledText small>Rating: {ratingAverage}</StyledText>
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
