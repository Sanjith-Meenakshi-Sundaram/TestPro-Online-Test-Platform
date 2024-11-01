
import React from 'react';
import { NavLink } from 'react-router-dom'
import ShowCard from '../Components/ShowCard';
import image from '../assets/images/profile.png'
import data from "../data/Examsdata";

function Landing(){
    return(
        <>

               <div className="p-8 pt-0">
                     <div className="flex justify-center items-center">
                           <div className="w-[50%] p-8 flex flex-col justify-center items-center gap-4">
                                 <p className="text-[2.1rem] font-semibold text-center">Every Test with <span className="text-[#01b4dc] font-bold">TestPro</span> Brings You Closer to Your Dreams!</p>
                                 <p className='text-zinc-800'>Your Success Story Starts Now Reach New Heights with TestPro.</p>
                                 <NavLink to='/login' className="py-2 px-4 text-white text-sm font-semibold rounded-lg bg-[#01b4dc]">Get Start</NavLink>
                           </div>
                           <div className="w-[50%]">
                                <img className='' src="https://cdni.iconscout.com/illustration/premium/thumb/education-illustration-download-in-svg-png-gif-file-formats--training-courses-distance-learning-online-university-isometric-pack-miscellaneous-illustrations-3135812.png?f=webp" alt="" />
                           </div>
                     </div>
                       
                     <div>
                          <p className='text-xl font-semibold text-center'>What are you looking for ?</p>
                          <div className='p-10 flex flex-wrap gap-4'>
                              {
                                data.map((exam)=>{
                                    return <ShowCard exam={exam}/>
                                })
                              }
                          </div>
                     </div>

                     <div className='m-5 p-5 shadow-lg border rounded-lg'>
                          <p className='text-xl font-semibold text-center'>About Developer</p>
                          <div className='flex gap-5 justify-center items-center'>
                                <img className='w-[15%] rounded-lg' src={image} alt="profile-photo" />
                                <div className='w-[60%] p-5'>
                                     <p className='text-xl text-[#01b4dc] font-semibold text-center text-start mb-3'>Surjeet Dhakad</p>
                                     <p>As a developer, my passion lies in solving complex problems and translating ideas into functional software. I thrive on the challenges that arise during the development process, whether it’s debugging an issue or optimizing performance. Each project provides an opportunity to innovate and find creative solutions, which keeps me motivated and engaged.<a className='text-[#01b4dc]' href="https://portfolio-website-t5z3.onrender.com/">know more</a></p>
                                </div>
                          </div>
                     </div>

               </div>


        </>
    )
}

export default Landing;