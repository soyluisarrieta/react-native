import { StyleSheet, Text } from 'react-native'

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    color: 'grey'
  },
  bold: {
    fontWeight: 'bold'
  },
  orange: {
    color: '#e53'
  },
  big: {
    fontSize: 20
  },
  small: {
    fontSize: 10
  }
})

export default function StyledText ({ orange, bold, children, big, small }) {
  const textStyles = [
    styles.text,
    orange && styles.orange,
    bold && styles.bold,
    big && styles.big,
    small && styles.small
  ]
  return (
    <Text style={textStyles}>
      {children}
    </Text>
  )
}
