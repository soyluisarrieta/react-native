import { NativeRouter } from 'react-router-native'
import Main from './src/components/Main'
import { StatusBar } from 'react-native'

export default function App () {
  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
      <NativeRouter>
        <Main />
      </NativeRouter>
    </>
  )
}
