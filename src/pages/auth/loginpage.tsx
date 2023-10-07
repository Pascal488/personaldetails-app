import Form, { INitialValues } from "../../components/form"
import useLogin from "../../hooks/useLogin"


const loginpage = () => {
       const {handleLogin,userCredantialErrors} = useLogin()
       const Submit = (data: INitialValues) => {
              console.log(data)
              handleLogin(data)
            }
       return (
              <>
                     <Form
                            headerText1={'Login'}
                            onSubmit={(data) => Submit(data)}
                            userCredantialErrors={userCredantialErrors?.message}
                            redirect="/register"
                            redirectText2="Register"
                            redirectText1="Don’t have an account yet?"
                     />
              </>
       )
}

export default loginpage