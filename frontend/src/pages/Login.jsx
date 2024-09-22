import React, { useState } from 'react'
import api from '../service/api'
import { useNavigate, NavLink } from 'react-router-dom';
import image from "../assets/images/4119036.jpg"
function Login({setCurruser}) {

    let [username,setUser]=useState("");
    let [password,setPass]=useState("");
    const navigate=useNavigate();

    const handelSubmit=(e)=>{
        e.preventDefault();
        api.post('/user/login',{username,password})
        .then((res)=>{
          const {token,user}=res.data;
          localStorage.setItem('token',token)
          setCurruser(user);
          
          if(user.isAdmin){
            console.log("admin login");
            navigate('/');
          }
          else{
            console.log("regular user login");
            navigate('/')
          }
        console.log("Login Successful");
        setUser("");
        setPass("");
      })
      .catch((err)=>{
        console.log("login failed");
      })
    }

  return (
    <div className='flex justify-center items-center bg-zinc-200 p-5'>
           <div className='w-[50%] p-10 '>
                  <img className='w-[80%] rounded-2xl' src={image} alt="" />
           </div>
           <div className='flex py-10 px-5 w-[35%] flex-col border-4 border-zinc-600 rounded-3xl m-8 bg-white'>
                <h1 className='text-center text-2xl mt-2 font-semibold '>Login</h1>
                <form className='flex flex-col justify-center m-4 mb-2 p-10' onSubmit={handelSubmit}>
                      <label className='text-lg font-semibold' htmlFor="username">User Name</label>
                      <input className='border-2 rounded mt-2 mb-3 p-2'  type="text" value={username} placeholder='enter your username' onChange={(e)=>{setUser(e.target.value)}} required />
                      <label className='text-lg font-semibold' htmlFor="password">Password</label>
                      <input className='border-2 rounded-lg mt-2 mb-3 p-2' type="password" value={password} placeholder='enter password' onChange={(e)=>setPass(e.target.value)} required />
                      <button className='px-4 py-2 rounded bg-red-600 font-semibold text-zinc-100 mx-2 my-4'>Login</button>
                </form>
                <p className='text-lg font-500 text-center'>Already have an account? <NavLink className="text-blue-500" to="/register">Signup</NavLink></p>
           </div>
    </div>
  )
}

export default Login