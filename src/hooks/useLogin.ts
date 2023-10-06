import {  useMutation } from "@apollo/client"
import { useDispatch } from "react-redux"
import { addUserDetails } from "../features/auth/authSlice"
import { LOGIN } from "../grapql/mutations"


type ILogin = {
       email: string
       password: string
}


const useLogin = () => {
       const [loginuser, {error }] = useMutation(LOGIN)
       const saveUserDetail = useDispatch()
       const handleLogin = (data:ILogin) => {
              loginuser({
                     variables: {
                            loginInput: {
                                   email: data.email,
                                   password:data.password
                            }
                     },
                     onCompleted() {
                            saveUserDetail(addUserDetails(data))
                     }
              })
       }
       return {
              handleLogin,
              userCredantialErrors:error
       }
}


export default useLogin