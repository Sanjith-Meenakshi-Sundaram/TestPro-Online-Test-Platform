import React, { useEffect, useState } from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import TestCard from '../Components/TestCard'
import {} from "@fortawesome/free-regular-svg-icons"
import PreTestPopup from '../Components/PreTestPopup';
import Filters from '../Components/Filters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFilter} from '@fortawesome/free-solid-svg-icons'

function Home({testdata,startExam,curruser,testdetails,setDetails}) {
   const[examindex,setExamindex]=useState();
   const nevigate=useNavigate();
   const[filter,setFilter]=useState(false);

   useEffect(()=>{
      if(!curruser){
        nevigate("/login");
      }
   })
  return (<>
    <div className="w-[100%] h-[100vh] bg-[#F3F3F4] lg:p-10 pt-2 flex flex-col lg:flex-row justify-between">
          {examindex&& <div className='w-full absolute top-[0] left-[0] flex justify-center items-center bg-zinc-100 z-[100]'>
              <PreTestPopup setExamindex={setExamindex} startExam={startExam} examindex={examindex} testdetails={testdetails} />
          </div>}
          <button onClick={(e)=> {e.preventDefault(); return setFilter((pre)=>!pre)}} className='py-2 flex gap-1 justify-center items-center mb-2 sticky top-0 bg-white lg:hidden z-[80]'>
                <FontAwesomeIcon icon={faFilter} style={{color:"#01b4dc"}} />
                <p className='font-semibold'>Filters</p>
          </button>
          <div className={`lg:block absolute lg:relative lg:w-[25%] z-[80] ${filter?"block w-[100%]":"hidden"}`}>
            <Filters setFilter={setFilter}/>
          </div>  
          <div className="w-[100%] lg:w-[73%] h-[100%] p-2 lg:p-10 pt-0 mb-3 flex justify-center rounded-lg bg-white shadow-inner">
              <div className='w-[100%] pt-5 lg:pt-10 grid grid-cols-2 mb-8 lg:mb-0 sm:grid-cols-3 md:grid-cols-4 gap-3 lg:gap-5 overflow-auto'>
                  {
                    testdata.map((test,index)=>{
                      return <TestCard key={index} index={index} test={test} setExamindex={setExamindex} setDetails={setDetails}/>
                    })
                   }
              </div>
          </div>
    </div>
    </>
  )
}

export default Home