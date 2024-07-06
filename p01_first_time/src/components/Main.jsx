import { Navigate, Route, Routes } from 'react-router-native'
import { View } from 'react-native'
import RepositoryList from './RepositoryList'
import AppBar from './AppBar'
import Login from '../pages/Login'

function Main () {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Routes>
        <Route path='/' element={<RepositoryList />} />
        <Route path='/signin' element={<Login />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </View>
  )
}

export default Main
