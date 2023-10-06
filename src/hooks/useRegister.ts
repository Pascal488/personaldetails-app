
import { useDispatch } from "react-redux"
import { addUserDetails } from "../features/auth/authSlice"
import { REGISTER } from "../grapql/mutations"
import { useMutation } from "@apollo/client"
import { useState } from "react"

type IRegister = {
       email: string
       password: string
     }



const useRegister = () => {
       const [registerUser, { error }] = useMutation(REGISTER)
       const [successMessage,setSuccessMessage] = useState("")
       const register = useDispatch()
       const handleRegister = (data: IRegister) => {
              registerUser({
                     variables: {
                            registerInput: {
                                   email: data.email,
                                   password: data.password,
                            }

                     },
                     onCompleted() {
                            setSuccessMessage(`User with this email ${data.email}  created`)
                            register(addUserDetails(data))

                     }
              })
       }
       
       return {
              handleRegister,
              userCredantialErrors: error,
              successMessage
              
       }
}

export default useRegister