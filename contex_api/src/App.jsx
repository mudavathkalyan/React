import UserContexProvider from './contex/UserContexProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  return (
  <UserContexProvider>
  <Login/>
  <Profile/>
  </UserContexProvider>
  )
}

export default App
