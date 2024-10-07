import React, { useEffect, useState } from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import TestCard from '../Components/TestCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHouse, faBookmark, faSquarePollVertical,faLayerGroup, faCalendarDays, faCrown} from '@fortawesome/free-solid-svg-icons'
import PreTestPopup from '../Components/PreTestPopup';

function Home({testdata,startExam,curruser,testdetails,setDetails}) {
   const[examindex,setExamindex]=useState();
   const nevigate=useNavigate();

   useEffect(()=>{
      if(!curruser){
        nevigate("/login");
      }
   })

   const handelPretest=()=>{
       
   }
  return (<>
    <div className='flex'>
        <div className='w-[50rem]'>
        <div className='border-e-2 p-10 fixed bg-white'>
               
                     <NavLink  className="flex justify-start items-center px-5 py-2 gap-4 text-xl border-b-2 mb-5"><FontAwesomeIcon icon={faHouse}/><p>Home</p></NavLink>
                     <NavLink  className="flex justify-start items-center px-5 py-2 gap-4 text-xl border-b-2 mb-5"><FontAwesomeIcon icon={faBookmark}/><p>Take a Mock Test</p></NavLink>
                     <NavLink  className="flex justify-start items-center px-5 py-2 gap-4 text-xl border-b-2 mb-5"> <FontAwesomeIcon icon={faSquarePollVertical} /><p>View Results</p></NavLink>
                     <NavLink  className="flex justify-start items-center px-5 py-2 gap-4 text-xl border-b-2 mb-5"><FontAwesomeIcon icon={faLayerGroup} /><p>Test Categories</p></NavLink>
                     <NavLink  className="flex justify-start items-center px-5 py-2 gap-4 text-xl border-b-2 mb-5"><FontAwesomeIcon icon={faCalendarDays} /><p>Upcoming Exams</p></NavLink>
            
                
        </div>
        </div>
        <div className='flex justify-center flex-wrap gap-5 p-5'>
            {examindex&& <div className='w-full h-full fixed top-[0] left-[0] flex justify-center items-center bg-zinc-100'>
              <PreTestPopup setExamindex={setExamindex} startExam={startExam} examindex={examindex} testdetails={testdetails} />
             </div>}
            <h1 className='text-center w-[80%] mx-4 py-4 border rounded-lg text-zinc-100 font-semibold bg-green-500 text-xl flex gap-2 justify-center items-center'> <FontAwesomeIcon icon={faCrown} /><p>Your Path to Success, One Test at a Time.</p></h1>
                 {
                  testdata.map((test,index)=>{
                    return <TestCard key={index} index={index} test={test} setExamindex={setExamindex} setDetails={setDetails}/>
                  })
                 }
        </div>
    </div>
    </>
  )
}

export default Home