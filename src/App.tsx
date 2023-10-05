import { useSelector } from 'react-redux'
import {getUserDetails} from "./features/auth/authSlice"

function App() {
  const userDetails = useSelector(getUserDetails);
  function letsee() {
    console.log(userDetails)
  }
  return (
    <>
      <button onClick={letsee} className='bg-blue-600'>
        Click me
    </button>
    </>
  )
}

export default App
