import Form, { INitialValues } from "../../components/form"
import useRegister from "../../hooks/useRegister"


const registerpage = () => {
       const {handleRegister,userCredantialErrors,successMessage} = useRegister()
       const Submit = (data: INitialValues) => {
              console.log(data)
              handleRegister(data)
            }
       return (
              <>
                     <Form
                            headerText1={'Join thousands of learners from around the world '}
                            headerText2={"Master web development by making real-life projects. There are multiple paths for you to choose"}
                            onSubmit={(data) => Submit(data)}
                            userCredantialErrors={userCredantialErrors?.message}
                            successMessage={successMessage}
                     />
              </>
       )
}

export default registerpage