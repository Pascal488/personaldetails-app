import { useSelector } from 'react-redux'
import {getUserDetails} from "./features/auth/authSlice"
import './App.css'

function App() {
  const userDetails = useSelector(getUserDetails);
  function letsee() {
    console.log(userDetails)
  }
  return (
    <>
      <button onClick={letsee}>
        Click me
    </button>
    </>
  )
}

export default App
