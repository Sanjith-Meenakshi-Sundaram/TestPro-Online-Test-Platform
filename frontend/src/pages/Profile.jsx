
import image from "../assets/images/profile.png";
import backgroung from "../assets/images/pro_back.png";
import Profile_test_card from "../Components/Profile_test_card";
import { useEffect, useState } from "react";
import isTokenExpired from "../utils/isTokenExpired";
import { useNavigate } from "react-router-dom";
function Profile(){
    const [showmore1,setState1]=useState(false);
    const [showmore2,setState2]=useState(false);
    const [curruser,setCurruser]=useState({});

    const navigate=useNavigate();
    useEffect(()=>{
      if(!localStorage.getItem('token')||isTokenExpired(localStorage.getItem('token'))||!localStorage.getItem('user')){
         navigate('/login');
         return;
       }
       setCurruser(JSON.parse(localStorage.getItem('user')));
    },[]);
    
 return(
    <>
    <div className="w-[100%] h-[100%] bg-[#F3F3F4] p-5 md:p-10 flex flex-col md:flex-row justify-between">
       <div className="w-[100%]  md:w-[25%] bg-white rounded-lg overflow-hidden">
             <div className="relative z-[50]">
                <img className="w-[40rem]" src={backgroung} alt="" />
                <img className="absolute rounded-full w-[47%] m-auto left-0 right-0 top-0 bottom-0" src={image} alt="image" />
                <p className="text-center font-semibold text-zinc-600">{curruser.username}</p>
             </div>
             <div className="w-[100%] px-10 pt-5 flex flex-col gap-3 text-sm cursor-pointer">
                 <div className="border-b-2 pb-3 hover:border-[#B5E3F1]">
                    <p className="text-zinc-400">Name</p>
                    <p>{curruser.username}</p>
                 </div>
                 <div className="border-b-2 pb-3 hover:border-[#B5E3F1]">
                    <p className="text-zinc-400">Email Address</p>
                    <p>{curruser.email}</p>
                 </div>
                 <div className="border-b-2 pb-3 hover:border-[#B5E3F1]">
                    <p className="text-zinc-400">Total Tests Taken</p>
                    <p>50</p>
                 </div>
                 <div className="border-b-2 pb-3 hover:border-[#B5E3F1]">
                    <p className="text-zinc-400">Overall Performance</p>
                    <p>95%</p>
                 </div>
             </div>

       </div> 
       <div className="w-[100%]  md:w-[73%] mt-3 md:mt-0 h-[100%] lg:ps-10 flex flex-col md:items-center gap-5">
                  <div className="w-[100%]  p-7 pb-4 rounded-lg bg-white">
                       <p className="text-lg border-b-2 border-[#B5E3F1] font-semibold text-zinc-600">List of Tests Taken</p>
                        <div className={`w-[100%] flex flex-col lg:flex-row items-center gap-3 lg:overflow-x-auto pt-5 ${showmore1?"lg:flex-wrap":""}`}>
                        <div className="w-full lg:w-[15rem]"><Profile_test_card/></div>
                        <div className="w-full lg:w-[15rem]"><Profile_test_card/></div>
                        <div className="w-full lg:w-[15rem]"><Profile_test_card/></div>
                        <div className="w-full lg:w-[15rem]"><Profile_test_card/></div>
                        <div className="w-full lg:w-[15rem]"><Profile_test_card/></div>
                        </div>
                       <p className=" hidden lg:block text-end text-sm text-[#609AB0] cursor-pointer" onClick={()=>setState1(!showmore1)}>{showmore1?"show less":"show more"}</p>
                  </div>
                  <div className="w-[100%]  p-4 rounded-lg bg-white">
                      <p className="text-lg border-b-2 border-[#B5E3F1] font-semibold text-zinc-600">Scores and Analysis</p>
                  </div>
                  <div className="w-[100%]  p-7 pb-4 rounded-lg bg-white">
                       <p className="text-lg border-b-2 border-[#B5E3F1] font-semibold text-zinc-600">Upcoming or Pending Tests</p>
                        <div className={`w-[100%] flex flex-col md:flex-row gap-3 overflow-x-auto pt-5 ${showmore2?"lg:flex-wrap":""}`}>
                        <div className="w-full md:w-[15rem]"><Profile_test_card/></div>
                        <div className="w-full md:w-[15rem]"><Profile_test_card/></div>
                        <div className="w-full md:w-[15rem]"><Profile_test_card/></div>
                        <div className="w-full md:w-[15rem]"><Profile_test_card/></div>
                        <div className="w-full md:w-[15rem]"><Profile_test_card/></div>
                        </div>
                       <p className="hidden md:block text-end text-sm text-[#609AB0] cursor-pointer" onClick={()=>setState2(!showmore2)}>{showmore2?"show less":"show more"}</p>
                  </div>
       </div>
    </div>
    </>
 );
}
export default Profile;