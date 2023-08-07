import { StyleSheet, View } from 'react-native'
import StyledText from './StyledText'
import RepositoryStats from './RepositoryStats'

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
