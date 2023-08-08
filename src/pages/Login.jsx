import { Formik, useField } from 'formik'
import { Button, StyleSheet, View } from 'react-native'
import StyledInput from '../components/StyledInput'

const initialValues = {
  email: '',
  password: ''
}

const styles = StyleSheet.create({
  form: {
    margin: 20
  }
})

function FormikInputValue ({ name, ...props }) {
  const [field, meta, helpers] = useField(name)
  return (
    <StyledInput
      placeholder='Email'
      value={field.value}
      onChangeText={value => helpers.setValue(value)}
      {...props}
    />
  )
}

function Login () {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => console.log(values)}
    >
      {({ handleSubmit }) => {
        return (
          <View style={styles.form}>
            <FormikInputValue name='email' placeholder='Email' />
            <FormikInputValue name='password' placeholder='Password' secureTextEntry />
            <Button onPress={handleSubmit} title='Login' />
          </View>
        )
      }}
    </Formik>
  )
}

export default Login
