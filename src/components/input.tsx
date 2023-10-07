import React from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
       Icon?: React.ReactNode
       values?:"email" | "password" 
       placeholderText: string
       type?: "text" | "password"
       register: UseFormRegisterReturn
       width?: string
       label?:string
}
type InputWrapperProps = {
       children:React.ReactNode
}

const input = ({ ...props}: InputProps) => {
       return (

              <div>
                  {props.label &&
                     <label className='block text-sm ml-[2.5px] mb-[2px]'>
                     {props.label}
                     </label>
                     }       
              <div className="relative flex items-center border-[1px] bg-inherit border-[#E0E0E0] py-2.5 px-2 rounded-lg">
                     {props.Icon}
                     <input type={props.type} className={`outline-none ml-8  ${props.Icon ? 'ml-8' : 'ml-0'} ${props.width}`} placeholder={props.placeholderText}    {...props.register}
                     />
              </div>
         </div>
  )
}

export const Textarea = ({ ...props}: InputProps) => {
       return (

              <div>
                  {props.label &&
                     <label className='block text-sm ml-[2.5px] mb-[2px]'>
                     {props.label}
                     </label>
                     }       
              <div className="border-[1px] bg-inherit border-[#E0E0E0]  px-2 rounded-lg">
                     <textarea  className='outline-none lg:w-[416.932px] md:w-[416.932px]'  placeholder={props.placeholderText}    {...props.register}
                     />
              </div>
         </div>
  )
}
export const InputWrapper = ({children}: InputWrapperProps) => {
       return (

              <div className="flex lg:justify-between  items-center  py-3 px-5 relative">
                     {children}
              </div>
  )
}


export default input