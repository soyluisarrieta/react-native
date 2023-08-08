import { Formik } from 'formik'
import { Button, TextInput, View } from 'react-native'

const initialValues = {
  email: '',
  password: ''
}

function Login () {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => console.log(values)}
    >
      {({ handleChange, handleSubmit, values }) => {
        return (
          <View>
            <TextInput
              placeholder='Email'
              value={values.email}
              onChangeText={handleChange('email')}
            />
            <TextInput
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
