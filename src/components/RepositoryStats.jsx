import { View } from 'react-native'
import StyledText from './StyledText'
import { parseThousands } from '../utils/parsersNumber.js'

function RepositoryStats ({ stargazersCount, forksCount, reviewCount, ratingAverage }) {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
      <View>
        <StyledText align='center'>{parseThousands(stargazersCount)}</StyledText>
        <StyledText align='center' fontWeight='bold'>Stars</StyledText>
      </View>
      <View>
        <StyledText align='center'>{parseThousands(forksCount)}</StyledText>
        <StyledText align='center' fontWeight='bold'>Forks</StyledText>
      </View>
      <View>
        <StyledText align='center'>{parseThousands(reviewCount)}</StyledText>
        <StyledText align='center' fontWeight='bold'>Review</StyledText>
      </View>
      <View>
        <StyledText align='center'>{parseThousands(ratingAverage)}</StyledText>
        <StyledText align='center' fontWeight='bold'>Rating</StyledText>
      </View>
    </View>
  )
}

export default RepositoryStats
