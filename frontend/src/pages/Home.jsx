import React, { useEffect, useState } from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import TestCard from '../Components/TestCard'
import {} from "@fortawesome/free-regular-svg-icons"
import PreTestPopup from '../Components/PreTestPopup';
import Filters from '../Components/Filters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFilter} from '@fortawesome/free-solid-svg-icons'
import api  from '../service/api';

function Home() {
   const nevigate=useNavigate();
   const[filter,setFilter]=useState(false);
   const[testdata,setTestdata]=useState([]);
   const[currTest,setCurrTest]=useState(null);

   useEffect(()=>{
       api.get('/test/tests')
       .then((res)=>setTestdata(res.data))
       .catch((error)=>console.log(error.message));
   },[])

  return (<>
    <div className="w-[100%] h-[100vh] bg-[#F3F3F4] lg:p-10 pt-2 flex flex-col lg:flex-row justify-between">
          {currTest&& <div className='w-full absolute top-[0] left-[0] flex justify-center items-center bg-zinc-100 z-[100]'>
              <PreTestPopup currTest={currTest} setCurrTest={setCurrTest} />
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
                      return <TestCard key={index} test={test} setCurrTest={setCurrTest}/>
                    })
                   }
              </div>
          </div>
    </div>
    </>
  )
}

export default Home