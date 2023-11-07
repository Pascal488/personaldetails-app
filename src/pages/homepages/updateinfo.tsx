import Header from "../../components/header"
import Input, { Textarea, InputWrapper } from "../../components/input"
import PROFILE from "../../assets/images/devchallenges.png"
import { useForm } from "react-hook-form"
import { IconChevronLeft } from "@tabler/icons-react"
import { useNavigate, useParams } from "react-router-dom"





const updateinfo = () => {
       const { userEmail } = useParams();
       console.log("Email",userEmail)
       const navigate = useNavigate() 
       const values = {
              name:"" ,
              bio: "",
              phoneNumber: 0,
              email: "",
              password:""
       }
       const {register,handleSubmit,formState:{errors} } = useForm({
              defaultValues: {
                     name: values.name,
                     bio: values.bio,
                     email: values.email,
                     phoneNumber: values.phoneNumber,
                     password:values.password
              },
       })
       const onSubmit = () => {
              console.log("Hello there")
       }
       const backtoInfo = () => {
              navigate("/info")
       }
       return (

              <>
                     <div className="lg:px-16 lg:py-5 p-5 relative">
                            <Header />
                            <div className="absolute lg:left-[24.5rem] md:left-[24.5rem] xl:left-[24.5rem]  cursor-pointer ">
                                   <span className="flex items-center text-[#2D9CDB]" onClick={backtoInfo}>
                                          <IconChevronLeft />
                                          <p>Back</p>
                                          <p>{userEmail}</p>
                                   </span>
                            </div>
                            <div className="flex  justify-center lg:mt-10  mt-5">
                                   <div className="flex flex-col justify-center items-center w-full  border-[1px] border-#E0E0E0]  rounded-lg lg:max-w-4xl mt-3 lg:mt-0">
                                          <div className="flex justify-between items-center mt-5 w-full p-6">
                                                 <div className="flex flex-col ">
                                                        <div>
                                                               <h1 className="text-2xl ">Change Info</h1>
                                                        </div>
                                                        <div>
                                                               <p className="max-w-[190px] text-sm text-gray-600 lg:max-w-full mt-3">Changes will be reflected to every services</p>
                                                        </div>
                                                 </div>
                                                 <div>
                                                 </div>
                                          </div>
                                          <div className="flex flex-col gap-6 w-full py-5">
                                                 <form action="p-5" onSubmit={handleSubmit(onSubmit)}>
                                                        <InputWrapper>
                                                        
                                                               <div className="flex items-center space-x-5 ">
                                                                      <div className="border-#E0E0E0] border-[1px] p-[2px] rounded-lg">
                                                                             <img src={PROFILE} alt="" className="w-16 h-16 hover:cursor-pointer"/>
                                                                      </div>
                                                                      <div>
                                                                             <p className="text-gray-600 text-sm cursor-pointer">CHANGE PHOTO</p>
                                                                      </div>

                                                               </div>
                                                        </InputWrapper>
                                                        <InputWrapper>
                                                               <Input
                                                                      width="input-width "
                                                                      label={"Name"}   
                                                                      placeholderText="Enter your name..."
                                                                      type={"text"}
                                                                      register={register("name", {
                                                                             required: "Name is required",
                                                                             pattern: {
                                                                                    value: /[A-Za-z]/,
                                                                                    message:"Provide a valid name please"
                                                                       }
                                                                      })}
                                                               />
                                                        {errors && (<span className="errors-styles">{errors.name?.message}</span>)}  
                                                        </InputWrapper>
                                                        <InputWrapper>
                                                               <Textarea 
                                                                      placeholderText={"Enter your bio"} 
                                                                      register={register("bio", {
                                                                             required: "Bio is required",
                                                                      })}
                                                                      label="Bio"
                                                               />       
                                                        {errors && (<span className="errors-styles">{errors.bio?.message}</span>)}  
                                                        </InputWrapper>
                                                        <InputWrapper>
                                                               <Input
                                                                      width="input-width "
                                                                      placeholderText="Enter your phone number..."
                                                                      type={"text"}
                                                                      register={register("phoneNumber", {
                                                                             required: "PhoneNumber is required",
                                                                      })}
                                                                      label={"Phone"}   
                                                               />
                                                               {errors && (<span className="errors-styles">{errors.phoneNumber?.message}</span>)}  

                                                        </InputWrapper>
                                                        <InputWrapper>
                                                               <Input
                                                                      width="input-width  "
                                                                      placeholderText="Enter your email..."
                                                                      values="email"
                                                                      type={"text"}
                                                                      register={register("email", {
                                                                             required: "Email is required",
                                                                             pattern: {
                                                                                    value:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                                                    message: 'Please enter a valid email',
                                                                      },
                                                                      })}
                                                                      label={"Email"}   
                                                               />
                                                               {errors && (<span className="errors-styles">{errors.email?.message}</span>)}  
                                                        </InputWrapper>
                                                        <InputWrapper>
                                                               <Input
                                                                      width="input-width "
                                                                      placeholderText="Enter your password..."
                                                                      type={"password"}
                                                                      register={register("password", {
                                                                             required: "Password is required",
                                                                      })}
                                                                      label="Password"
                                                               />
                                                               {errors && (<span className="errors-styles">{errors.password?.message}</span>)}  
                                                        </InputWrapper>
                                                        <InputWrapper>
                                                               <button type="submit" className="py-[5px] px-4 bg-[#2F80ED] text-white rounded-md mt-5 md:w-[35%] lg:w-20">
                                                                      Save
                                                               </button>
                                                        </InputWrapper>
                                                 
                                                 </form>
                                          </div>
                                   </div>
                                   </div>
                                   
                     </div>
              </>


       )
       


       }





export default updateinfo