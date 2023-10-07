import { useNavigate } from "react-router-dom"
import PROFILE from "../../assets/images/devchallenges.png"
import Header from "../../components/header"




const personalinfo = () => {
       const navigate = useNavigate()
       const goToEdit = () => {
              navigate("/edit")
       }
       return (

              <>
                     <div className="lg:px-16 lg:py-5 p-5">
                            <Header/>
                            <div className="flex justify-center mt-5">
                                   <div className="mt-5">
                                          <div className="text-center">
                                                 <h1 className="text-4xl mb-3">
                                                        Personal info
                                                 </h1>
                                          </div>
                                          <p className="font-light">
                                                 Basic info, like your name and photo
                                          </p>
                                   </div>
                            </div>
                            <div className="flex  justify-center lg:mt-10  mt-5">
                                   
                            <div className="flex flex-col justify-center items-center w-full  border-[1px] border-[#E0E0E0]  rounded-lg max-w-4xl ">
                                   <div className="flex justify-between items-center mt-5 w-full p-6">
                                          <div className="flex flex-col">
                                                 <div>
                                                        <h1 className="text-2xl ">Profile</h1>
                                                 </div>
                                                 <div>
                                                        <p className="max-w-[190px] text-sm text-gray-600 lg:max-w-full">Some info may be visible to other people</p>
                                                 </div>
                                          </div>
                                          <div>
                                                 <button className="border-[1px] border-gray-600 rounded-xl w-[100px] py-1.5 px-4 text-gray-600" onClick={goToEdit}>Edit</button>
                                          </div>
                                   </div>
                                   <hr className="h-px bg-gray-300 w-full"/>
                                   <div className="flex flex-col gap-6 w-full ">
                                          <div className="flex justify-between items-center py-3 px-5  lg:max-w-4xl">
                                                 <div><p className="text-sm text-gray-600">PHOTO</p></div>
                                                 <div className="flex justify-between"><img src={PROFILE} alt="" className="w-20 h-20"/> </div>
                                          </div>
                                          <hr/>
                                          <div className="flex justify-between items-center py-3 px-5 lg:max-w-4xl">
                                                 <div><p className="text-sm text-gray-600">NAME</p></div>
                                                 <div><p className="text-sm text-gray-600">Xanthe Neal</p></div>
                                          </div>
                                           <hr className="h-px bg-gray-300 w-full"/>
                                          <div className="flex justify-between items-center py-3  px-5 lg:max-w-4xl">
                                                 <div><p className="text-sm text-gray-600">BIO</p></div>
                                                 <div className="max-w-md"><p className="text-sm text-gray-600 text-right">I am a software developer and a big fan of devchallenges..</p></div>
                                          </div>
                                          <hr/>
                                          <div className="flex justify-between items-center py-3 px-5 lg:max-w-4xl">
                                                 <div><p className="text-sm text-gray-600">PASSWORD</p></div>
                                                 <div><p className="text-sm text-gray-600">************</p></div>
                                          </div>
                                   </div>
                            </div>
                            </div>
                                   
                         
                     </div>
              </>

       )
       


       }





export default personalinfo