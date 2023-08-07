import { StyleSheet, View } from 'react-native'
import StyledText from './StyledText'

function RepositoryStats ({ stargazersCount, forksCount, reviewCount, ratingAverage }) {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
      <View>
        <StyledText align='center' fontWeight='bold'>Stars</StyledText>
        <StyledText align='center'>{stargazersCount}</StyledText>
      </View>
      <View>
        <StyledText align='center' fontWeight='bold'>Forks</StyledText>
        <StyledText align='center'>{forksCount}</StyledText>
      </View>
      <View>
        <StyledText align='center' fontWeight='bold'>Review</StyledText>
        <StyledText align='center'>{reviewCount}</StyledText>
      </View>
      <View>
        <StyledText align='center' fontWeight='bold'>Rating</StyledText>
        <StyledText align='center'>{ratingAverage}</StyledText>
      </View>
    </View>
  )
}

function RepositoryItem (props) {
  return (
    <View key={props.id} style={styles.container}>
      <StyledText fontWeight='bold' fontSize='subheading'>FullName: {props.fullName}</StyledText>
      <StyledText>Description: {props.description}</StyledText>
      <StyledText>Language: {props.language}</StyledText>
      <RepositoryStats {...props} />
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
