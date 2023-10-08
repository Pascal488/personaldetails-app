import LOGO from "../assets/images/devchallenges.svg"
import PROFILE from "../assets/images/devchallenges.png"
import { Menu } from "@headlessui/react"
import { IconLogout, IconUserCircle, IconUsers } from "@tabler/icons-react"
import {logoutUser} from "../lib/index"
import { useNavigate } from "react-router-dom"
const header = () => {
       const navigate = useNavigate()
       const MenuItems = [
              {
                     text: "My Profile",
                     icon:<IconUserCircle className="text-gray-600"/>
              },
              {
                     text: "Group Chat",
                     icon:<IconUsers className="text-gray-600"/>
              },
              {
                     text: "Logout",
                     icon:<IconLogout className="text-red-600"/>
              }

       ]
       return (
              <div className="flex justify-between items-center lg:px-24">
              <div>
                     <img src={LOGO} alt="" />
              </div>
                     <div className="relative">
                            <div>
                                   <Menu as="div"  className="relative inline-block text-left">
                                          <Menu.Button as="div" className="flex justify-between mb-3 items-center space-x-5">
                                                 <div>
                                                        <img src={PROFILE} alt="" className="w-10 h-10 hover:cursor-pointer"/>
                                                 </div>
                                                 <div>
                                                        <Menu.Button className="lg:block md:block hidden">
                                                               <p>Paschal maxi</p>
                                                        </Menu.Button>
                                                 </div>
                                          </Menu.Button>
                                          <Menu.Items as="div" className="z-10 border-[1px] border-[#E0E0E0] rounded-lg bg-[#FFF] absolute right-0 w-48   py-5 px-3">
                                                        {MenuItems.map((data: any, key: number) => {
                                                               return (
                                                                      <Menu.Item as="a" key={key} className="flex flex-col border border-transparent  hover:bg-[#F2F2F2] hover:border-[#F2F2F2] px-2 rounded-md cursor-pointer">
                                                                             <div className="flex items-center space-x-2 py-2">
                                                                                    <span>{data.icon}</span>
                                                                                    <span className={`text-sm ${key === 2 ? 'text-red-600' : ''}`} onClick={()=>{if(key === 2){logoutUser()}if(key===0){navigate("/info")}}} >{data.text}</span>
                                                                             </div>
                                                                             {key === 1 ? (<><hr className="mt-[1px]"/></>) : ""}
                                                                     </Menu.Item>
                                                               )
                                                        })}
                                          </Menu.Items>
                                   </Menu>
                            </div>
                            
              </div>
       </div>
       )
}


export default header