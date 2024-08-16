import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faChevronDown, faUser, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { NavLink, useNavigate } from 'react-router-dom';

function Navbar({curruser, setCurruser}) {
     
     const navigate=useNavigate()
     const [flag,setflag]=useState(false);

     const handelLogout=()=>{
        setCurruser(null);
        localStorage.removeItem('token');
        setflag(false);
        navigate('/login');
     }
  return (
    <div className='flex justify-between items-center px-10 h-[4rem] border-b-2 text-xl sticky top-0 bg-white'>
           <div className='flex justify-center items-center gap-3'>
                 <div className='flex justify-center items-center gap-2 font-semibold' >
                      <FontAwesomeIcon icon={faBookmark} />
                      <h1>TestPro</h1>
                 </div>
                 <div>
                      <h1>Home</h1>
                 </div>
           </div>
           <div className='flex justify-center items-center gap-3'>
                <NavLink to='/login' className={`px-4 py-2 rounded bg-green-600 text-zinc-100 mx-2 ${curruser?"hidden":""}`}>Login</NavLink>
                <NavLink to='/register' className={`px-4 py-2 rounded bg-zinc-600 text-zinc-100 mx-2 ${curruser?"hidden":""}`}>SignUp</NavLink>
                <button className={`px-4 py-2 rounded bg-red-600 text-zinc-100 mx-2 ${!curruser?"hidden":""}`} onClick={handelLogout}>LogOut</button>
                <button className={`px-4 py-2 rounded bg-zinc-600 text-zinc-100 mx-2 ${!curruser?"hidden":""}`} onClick={()=>{setflag((pre)=>!pre)}} >{curruser?curruser.username:"profile"} {flag?<FontAwesomeIcon icon={faChevronUp} />:<FontAwesomeIcon icon={faChevronDown} />}</button>

                {
                    flag&&
                    <div className='fixed py-5 px-4 rounded-lg flex gap-4 flex-col justify-center items-center top-[4rem] right-[2rem] bg-zinc-200'>
                           <h1 className='text-center text-2xl font-semibold'>Profile</h1>
                           <FontAwesomeIcon icon={faUser} />
                           <p>Hi {curruser?curruser.username:""}</p>
                           <div>
                           <button className={`px-4 py-2 rounded-xl bg-red-600 text-zinc-100 mx-2 ${!curruser?"hidden":""}`} onClick={handelLogout}>LogOut</button>
                           <button className={`px-4 py-2 rounded-xl bg-blue-600 text-zinc-100 mx-2 ${!curruser?"hidden":""}`} onClick={handelLogout}>Edit Profile</button>
                           </div>
                    </div>
                }

           </div>
    </div>
  )
}

export default Navbar