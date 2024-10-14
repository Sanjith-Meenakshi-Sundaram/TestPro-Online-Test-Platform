import React, { useState } from 'react'
import api from '../service/api'
import image from "../assets/images/4119036.jpg"
import { NavLink,useNavigate } from 'react-router-dom'
import Buffer from "../Components/Buffer";

const Register = ({setCurruser}) => {

    let [username,setUser]=useState("");
    let [email,setEmail]=useState("");
    let [password,setPass]=useState("");
    let [loader,setLoader]=useState(false);
    let [LoginError,setError]=useState(false);

    const navigate=useNavigate();

    const handelSubmit=(e)=>{
        e.preventDefault();
        setLoader(true);
        api.post('/user/register',{username,email,password})
        .then((res)=>{
          const {token,user}=res.data;
          localStorage.setItem('token',token)
          setCurruser(user);
          setLoader(false);
          if(user.isAdmin){
            console.log("admin login");
            navigate('/')
          }
          else{
            console.log("regular user login");
            navigate('/')
          }
        console.log("Login Successful");
        setUser("");
        setPass("");
        setEmail("")
      })
      .catch((err)=>{
        setLoader(false);
        setError(true);
        console.log("login failed");
      })
    }

  return (
    <div className='flex justify-center items-center bg-[#F3F3F4]'>
           {loader&&<div className="h-[100vh] w-[100%] fixed top-0 flex justify-center items-center  bg-zinc-600 bg-opacity-50">
               <Buffer/>
           </div>}
           <div className='w-[50%] p-10 '>
                  <img className='w-[80%] rounded-lg shadow-lg' src={image} alt="" />
           </div>
           <div className='flex py-5 px-5 w-[35%] flex-col rounded-lg shadow-lg m-8 bg-white'>
                <h1 className='text-center text-2xl mt-2 font-semibold '>Register</h1>
                {LoginError&&<h1 className='text-center text-lg mt-2 font-semibold text-red-600 '>Username Exist Already Choose Different</h1>}
                <form className='flex flex-col justify-center m-4 mb-2 p-10 pt-5' onSubmit={handelSubmit}>
                      <label className='text-lg font-semibold' htmlFor="username">User Name</label>
                      <input className='border-2 rounded mt-2 mb-3 p-2'  type="text" value={username} placeholder='enter your username' onChange={(e)=>{setUser(e.target.value)}} required />
                      <label className='text-lg font-semibold' htmlFor="email">Email</label>
                      <input className='border-2 rounded-lg mt-2 mb-3 p-2' type="email" value={email} placeholder='enter your email' onChange={(e)=>setEmail(e.target.value)} required />
                      <label className='text-lg font-semibold' htmlFor="password">Password</label> 
                      <input className='border-2 rounded-lg mt-2 mb-3 p-2' type="password" value={password} placeholder='enter password' onChange={(e)=>setPass(e.target.value)} required />
                      <button className='px-5 py-2 rounded-lg bg-[#01b4dc] font-semibold text-zinc-100 mt-2'>Signup</button>
                </form>
                <p className='font-semibold font-500 text-center'>Already have an account? <NavLink className="text-[#01b4dc]" to="/login">login</NavLink></p>
           </div>
    </div>
  )
}

export default Register