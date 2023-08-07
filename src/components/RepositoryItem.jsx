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
      <StyledText fontWeight='bold' fontSize='subheading'>FullName: {fullName}</StyledText>
      <StyledText>Description: {description}</StyledText>
      <StyledText>Language: {language}</StyledText>
      <StyledText>Stars: {stargazersCount}</StyledText>
      <StyledText>Forks: {forksCount}</StyledText>
      <StyledText>Review: {reviewCount}</StyledText>
      <StyledText>Rating: {ratingAverage}</StyledText>
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
