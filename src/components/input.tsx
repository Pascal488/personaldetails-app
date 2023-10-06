import React from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
       Icon: React.ReactNode
       values:"email" | "password" 
       placeholderText: string
       type: "text" | "password"
       register:UseFormRegisterReturn
}


const input = ({ ...props}: InputProps) => {
       return (
         <div>             
              <div className="relative flex items-center border-[1px] bg-inherit border-gray-600 py-2.5 px-2 rounded-md">
                     {props.Icon}
                     <input type={props.type} className="w-full outline-none ml-8" placeholder={props.placeholderText}    {...props.register}
                     />
              </div>
         </div>
  )
}

export default input