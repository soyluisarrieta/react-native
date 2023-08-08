import { Navigate, Route, Routes } from 'react-router-native'
import { Text, View } from 'react-native'
import RepositoryList from './RepositoryList'
import AppBar from './AppBar'

function Main () {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Routes>
        <Route path='/' element={<RepositoryList />} />
        <Route path='/signin' element={<Text>Sign In</Text>} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </View>
  )
}

export default Main
