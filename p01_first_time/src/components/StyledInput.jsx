import { StyleSheet, TextInput } from 'react-native'

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#999',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10
  },
  error: {
    borderColor: 'red'
  }
})

function StyledInput ({ style = {}, error, ...props }) {
  const inputStyle = [
    styles.textInput,
    style,
    error && styles.error
  ]

  return (
    <TextInput {...props} style={inputStyle} />
  )
}

export default StyledInput
