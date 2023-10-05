
import { useDispatch } from "react-redux"
import { addUserDetails } from "../features/auth/authSlice"
import { REGISTER } from "../grapql/mutations"
import { useMutation } from "@apollo/client"

type IRegister = {
       email: string
       password: string
       name: string
       username:string
     }



const useRegister = () => {
       const [registerUser, {  }] = useMutation(REGISTER)
       const register = useDispatch()
       const handleRegister = (data: IRegister) => {
              registerUser({
                     variables: {
                            user: {
                                   email: data.email,
                                   password: data.password,
                                   name: "kid",
                                   username:"modo"
                            }

                     },
                     onCompleted() {
                            register(addUserDetails(data))
                     }
              })
       }
       
       return {
              handleRegister
       }
}

export default useRegister