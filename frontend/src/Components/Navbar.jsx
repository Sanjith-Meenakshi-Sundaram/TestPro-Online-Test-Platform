import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faChevronDown, faUser, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { NavLink, useNavigate } from 'react-router-dom';
import pro_img from "../assets/images/profile.png"

function Navbar({curruser, setCurruser}) {
     
     const navigate=useNavigate()
     const [flag,setflag]=useState(false);

     const handelLogout=()=>{
        setCurruser(null);
        localStorage.removeItem('token');
        setflag(false);
        navigate('/login',{});
     }
  return (
    <div className='flex justify-between items-center px-12 h-[5rem] text-xl sticky top-0 bg-white z-[100] hidden'>
           <div className='flex justify-center items-center gap-3'>
                 <div className='flex justify-center items-center gap-2 font-semibold' >
                      <FontAwesomeIcon icon={faBookmark} style={{color:"#01b4dc", fontSize:"2.2rem", zIndex:"100"}} />
                      <h1 className='text-[#01b4dc]'>TestPro</h1>
                 </div>
                 <div>
                 </div>
           </div>

           <div className='relative flex justify-center items-center gap-3 text-base font-semibold'>
                <NavLink to="/admin" className={`hover:text-[#01b4dc] border-b-2 border-white`}>Admin</NavLink>
                <NavLink to="/" className={`hover:text-[#01b4dc] border-b-2 border-white ${!curruser?"hidden":""}`}>Home</NavLink>
                <NavLink to='/login' className={`hover:text-[#01b4dc] ${curruser?"hidden":""}`}>Login</NavLink>
                <NavLink to='/register' className={`hover:text-[#01b4dc] ${curruser?"hidden":""}`}>SignUp</NavLink>
                <button className={`hover:text-[#01b4dc] ${!curruser?"hidden":""}`} onClick={handelLogout}>LogOut</button>
                <div className={`${!curruser?"hidden":""} flex gap-2 items-center ms-2`} onClick={()=>{setflag((pre)=>!pre)}}>
                <img className='rounded-full w-[2rem] h-[2rem]' src={pro_img} alt="" />
                <button >{curruser?curruser.username:"profile"} {flag?<FontAwesomeIcon icon={faChevronUp} />:<FontAwesomeIcon icon={faChevronDown} />}</button>
                </div>
                {
                    flag&&
                    <div className='fixed h-[100vh] w-[100%] bg-transparent top-0 right-0 z-100' onClick={()=>{setflag(false)}}>
                    <div className='absolute h-[13rem] w-[16rem] rounded-lg flex gap-4 flex-col gap-2 items-center top-[4rem] right-[2rem] bg-white overflow-hidden shadow-lg shadow-zinc-600'>
                           <div className='bg-[#F3F3F4] w-[100%] h-[30%] relative'>
                           <img className='rounded-full w-[4rem] h-[4rem] absolute m-auto top-[3rem] bottom-0 left-0 right-0' src={pro_img} alt="" />
                           </div>
                           <p className='mt-5'>Hi {curruser?curruser.username:""}</p>
                           <div className='flex justify-between'>
                           <button className={`${!curruser?"hidden":""}px-4 py-2 rounded-lg bg-white border-2 border-[#01b4dc] mx-2 `} onClick={handelLogout}>LogOut</button>
                           <button className={`px-4 py-2 rounded-lg bg-[#01b4dc] text-zinc-100 mx-2 ${!curruser?"hidden":""}`} onClick={()=>navigate("/profile")}>My Profile</button>
                           </div>
                    </div>
                    </div>
                }

           </div>
    </div>
  )
}

export default Navbar