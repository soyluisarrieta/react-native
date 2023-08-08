import { Formik, useField } from 'formik'
import { Button, StyleSheet, View } from 'react-native'
import StyledInput from '../components/StyledInput'
import StyledText from '../components/StyledText'
import { loginValidationSchema } from '../validationSchemas/login'

const initialValues = {
  email: '',
  password: ''
}

const styles = StyleSheet.create({
  form: {
    margin: 20
  },
  error: {
    color: 'red',
    marginBottom: 10,
    fontSize: 12,
    marginTop: -5
  }
})

function FormikInputValue ({ name, ...props }) {
  const [field, meta, helpers] = useField(name)
  return (
    <>
      <StyledInput
        error={meta.error}
        placeholder='Email'
        value={field.value}
        onChangeText={value => helpers.setValue(value)}
        {...props}
      />
      {meta.error && (
        <StyledText style={styles.error}>
          {meta.error}.
        </StyledText>
      )}
    </>
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
      validationSchema={loginValidationSchema}
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
