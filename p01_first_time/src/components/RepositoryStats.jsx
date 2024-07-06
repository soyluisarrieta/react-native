import { View } from 'react-native'
import StyledText from './StyledText'
import { parseThousands } from '../utils/parsersNumber.js'

function RepositoryStats ({ stargazersCount, forksCount, reviewCount, ratingAverage }) {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
      <View>
        <StyledText align='center' fontWeight='bold'>{parseThousands(stargazersCount)}</StyledText>
        <StyledText align='center'>Stars</StyledText>
      </View>
      <View>
        <StyledText align='center' fontWeight='bold'>{parseThousands(forksCount)}</StyledText>
        <StyledText align='center'>Forks</StyledText>
      </View>
      <View>
        <StyledText align='center' fontWeight='bold'>{parseThousands(reviewCount)}</StyledText>
        <StyledText align='center'>Review</StyledText>
      </View>
      <View>
        <StyledText align='center' fontWeight='bold'>{parseThousands(ratingAverage)}</StyledText>
        <StyledText align='center'>Rating</StyledText>
      </View>
    </View>
  )
}

export default RepositoryStats
