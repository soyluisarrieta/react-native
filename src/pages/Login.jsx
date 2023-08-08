import { Formik } from 'formik'
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

function Login () {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => console.log(values)}
    >
      {({ handleChange, handleSubmit, values }) => {
        return (
          <View style={styles.form}>
            <StyledInput
              placeholder='Email'
              value={values.email}
              onChangeText={handleChange('email')}
            />
            <StyledInput
              placeholder='Password'
              value={values.password}
              onChangeText={handleChange('password')}
            />
            <Button onPress={handleSubmit} title='Login' />
          </View>
        )
      }}
    </Formik>
  )
}

export default Login
