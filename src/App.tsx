import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Registerpage from './pages/auth/registerpage'
import LoginPage from './pages/auth/loginpage'


const App = () => {
  return (
              <>
                <BrowserRouter>
                       <Routes>
                              <Route path='/register' element={<Registerpage />} />
                              <Route path='/login' element={<LoginPage/>} />
                              
                     </Routes>
                </BrowserRouter>
              </>
  )
}

export default App