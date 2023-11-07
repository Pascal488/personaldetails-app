import {  IconLockSquareRoundedFilled, IconMailFilled } from "@tabler/icons-react"
import LOGO from "../assets/images/devchallenges.svg"
import {socialIcons} from "../lib/index"
import Input from "./input"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"

export type INitialValues = {
       email:string
       password: string
       token?: string}
type IFormProp = {
       headerText1: string
       headerText2?: string
       onSubmit: (data: INitialValues) => void
       userCredantialErrors: string | undefined
       successMessage?: string
       redirect: string 
       redirectText1: string
       redirectText2: string
}

const form = ({headerText1,headerText2,onSubmit,userCredantialErrors,successMessage,redirect,redirectText1,redirectText2}:IFormProp) => {
       const values: INitialValues = {
              email:"" ,
              password: "",
       }
       const {register,handleSubmit,formState:{errors} } = useForm({
              defaultValues: {
                     email: values.email,
                     password:values.password
              },
       })
       const Icons = socialIcons()
    
  return (
       <div className="lg:flex lg:justify-center lg:items-center lg:w-full lg:h-screen md:flex md:justify-center md:h-screen md:items-center font-[Noto sans] ">
              <div className="flex flex-col p-5 gap-7 lg:max-h-full lg:p-12 lg:max-w-lg md:w-[500px]  lg:w-[500px] lg:border-[1px] lg:border-[#E0E0E0] lg:rounded-xl md:max-w-md md:border-[1px] md:border-[#E0E0E0]  md:rounded-xl ">
                     <div className="flex justify-between">
                            <div className="">
                                   <img src={LOGO} alt="" className="w-full "/>
                            </div>
                     </div>
                     <div>
                            <p className="my-3 max-w-[20rem] font-semibold text-[18px]">
                                   {headerText1}
                            </p>  
                              <p>
                                     {headerText2}
                            </p>
                     </div>
                     <div className="flex flex-col gap-3" >
                              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
                                   <Input
                                            Icon={<IconMailFilled className="absolute top-2 bottom-0 right-0 left-2 text-gray-600" size={29} />}
                                            placeholderText="Email"
                                            values="email"
                                            type={"text"}
                                            register={register("email", {
                                                   required: "Email is required",
                                          //          pattern: {
                                          //               // value:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                          //               message: 'Please enter a valid email',
                                          //   },
                                            })}
                                     />
                                   {errors && (<span className="text-red-500 text-xs">{errors.email?.message}</span>)}  
                                   <Input
                                            Icon={<IconLockSquareRoundedFilled className="absolute top-2 bottom-0 right-0 left-2 text-gray-600" size={29} />}
                                            placeholderText="Password"
                                            values="password"
                                            type={"password"}
                                            register={register("password",{required:"Password is required"})}
                                     />           
                                     {errors && (<span className="text-red-500 text-xs">{errors.password?.message}</span>)}  
                                     <div className="flex justify-center text-center mt-2 ">
                                            <p className="text-center text-red-600 ">{userCredantialErrors}</p>
                                            <p className="text-center text-green-600 ">{successMessage}</p>
                                     </div>
                                   <button type="submit" className="w-full py-2.5 px-2 bg-[#2F80ED] text-white rounded-md ">
                                          Start coding now 
                                   </button>
                              </form>
                            <div>
                                   <p className="text-center mt-5 hover:underline">or continue with these social profile</p>
                            </div>
                            <div className="flex  gap-3  justify-center">
                                   {Icons.map((icon: string, index: number) => {
                                          return (
                                                 <img src={icon} key={index}  className="hover:cursor-pointer"/>
                                          )
                                   })}
                            </div>
                            <div className="flex justify-center mt-2">
                                     <p className="">{redirectText1}
                                            <Link to={redirect} className="text-[#2F80ED] text-center hover:cursor-pointer ml-[4px]">
                                                 {redirectText2}
                                            </Link>
                                     </p>
                            </div>
                     </div>
              </div>
       </div>
  )
}

export default form