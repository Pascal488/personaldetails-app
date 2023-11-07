import {  useMutation } from "@apollo/client"
import { useDispatch } from "react-redux"
import { addUserDetails } from "../features/auth/authSlice"
import { LOGIN } from "../grapql/mutations"
import { useNavigate } from "react-router-dom"
import { setLocalStorageItems } from "../lib"


type ILogin = {
       email: string
       password: string
       token?:string
}


const useLogin = () => {
       const navigate = useNavigate()
       const [loginuser, {error }] = useMutation(LOGIN)
       const saveUserDetail = useDispatch()
       const handleLogin = (data: ILogin) => {
              loginuser({
                     variables: {
                            loginInput: {
                                   email: data.email,
                                   password:data.password
                            }
                     },
                     onCompleted(data) {
                            saveUserDetail(addUserDetails(data))
                            setLocalStorageItems(data)
                            navigate("/info")

                     }
              })
       }
       return {
              handleLogin,
              userCredantialErrors:error
       }
}


export default useLogin