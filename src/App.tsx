import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Registerpage from './pages/auth/registerpage'
import LoginPage from './pages/auth/loginpage'
import Personalinfo from './pages/homepages/personalinfo'
import Updateinfo from './pages/homepages/updateinfo'


const App = () => {
  return (
              <>
                <BrowserRouter>
                       <Routes>
                              <Route path='/register' element={<Registerpage />} />
                              <Route path='/login' element={<LoginPage/>} />
                              <Route path='/info' element={<Personalinfo/>}/>
                              <Route path='/edit' element={<Updateinfo/>}/>
                              
                     </Routes>
                </BrowserRouter>
              </>
  )
}

export default App