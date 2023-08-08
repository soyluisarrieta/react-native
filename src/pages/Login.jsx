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

function validate (values) {
  const errors = {}
  if (!values.email) {
    errors.email = 'Email is required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  console.error({ errors })

  return errors
}

function Login () {
  return (
    <Formik
      validate={validate}
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
