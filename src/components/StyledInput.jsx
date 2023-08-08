import { StyleSheet, TextInput } from 'react-native'

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#999',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10
  }
})

function StyledInput ({ style = {}, ...props }) {
  const inputStyle = {
    ...styles.textInput,
    ...style
  }
  return (
    <TextInput {...props} style={inputStyle} />
  )
}

export default StyledInput
