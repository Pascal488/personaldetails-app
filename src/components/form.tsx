import {  IconLockSquareRoundedFilled, IconMailFilled } from "@tabler/icons-react"
import LOGO from "../assets/images/devchallenges.svg"
import {socialIcons} from "../lib/index"
import Input from "./input"
import useRegister from "../hooks/useRegister"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
type IRegister = {
       email: string
       password: string
}
type IRegisterProp = {
       headerText1: string
       headerText2?:string
       
       
}
const form = ({headerText1,headerText2}:IRegisterProp) => {
       const {handleRegister} = useRegister()
       const values: IRegister = {
              email: "",
              password:""
       }
       const {register,handleSubmit,formState:{errors} } = useForm({
              defaultValues: {
                     email: values.email,
                     password:values.password
              },
       })
       const Icons = socialIcons()
       const onSubmit = (data: any) => {
              console.log(data)
              handleRegister(data)
            }
  return (
       <div className="lg:flex lg:justify-center lg:items-center lg:w-full lg:h-screen md:flex md:justify-center md:h-screen md:items-center font-[Noto sans]">
              <div className="flex flex-col p-5 gap-7 lg:max-h-full lg:p-12 lg:max-w-md lg:border-[1px] lg:border-gray-600 lg:rounded-xl md:max-w-md md:border-[1px] md:border-gray-600 md:rounded-xl">
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
                                            register={register("email",{required:"Email is required"})}
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
                                   <button type="submit" className="w-full py-2.5 px-2 bg-[#2F80ED] text-white rounded-md mt-5">
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
                            <div className="flex justify-center ">
                                     <p>Adready a member?
                                            <Link to='/login' className="text-[#2F80ED] text-center hover:cursor-pointer space-x-5">
                                                 Login  
                                            </Link>
                                     </p>
                            </div>
                     </div>
              </div>
       </div>
  )
}

export default form