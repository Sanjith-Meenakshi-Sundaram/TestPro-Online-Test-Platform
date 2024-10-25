import React, { useEffect, useState } from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import TestCard from '../Components/TestCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFilter, faHouse, faBookmark, faSquarePollVertical,faLayerGroup, faCalendarDays, faCrown} from '@fortawesome/free-solid-svg-icons'
import {} from "@fortawesome/free-regular-svg-icons"
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
    <div className="w-[100%] h-[90vh] bg-[#F3F3F4] p-10 pt-5 flex justify-between">
          {examindex&& <div className='w-full h-full fixed top-[0] left-[0] flex justify-center items-center bg-zinc-100 z-[100]'>
              <PreTestPopup setExamindex={setExamindex} startExam={startExam} examindex={examindex} testdetails={testdetails} />
          </div>}
        <div className="w-[25%] bg-white rounded-lg p-12 pt-8 flex flex-col gap-4 justify-between overflow-auto">
             <div className='flex gap-1 justify-center items-center mb-2 sticky top-0 bg-white'>
                <FontAwesomeIcon icon={faFilter} style={{color:"#01b4dc"}} />
                <p className='font-semibold'>Filters</p>
             </div>
             <div className='text-sm font-medium text-zinc-800 flex flex-col gap-1'>
                <p className='font-semibold text-sm text-zinc-700 mb-1 cursor-pointer'>Difficulty Levels</p>
                <div >
                <input type="checkbox" name='easy' id='easy'/>
                <label htmlFor="easy" className='ms-2 cursor-pointer'>Easy</label>
                </div>
                <div>
                <input type="checkbox" name='medium' id='medium'/>
                <label htmlFor="medium" className='ms-2 cursor-pointer'>Medium</label>
                </div>
                <div>
                <input type="checkbox" name='hard' id='hard'/>
                <label htmlFor="har" className='ms-2 cursor-pointer'>Advance</label>
                </div>
             </div>
             <div className='text-sm font-medium text-zinc-800'>
                 <label className='font-semibold cursor-pointer' htmlFor="Category">Category</label>
                 <select className='outline-none border-2 rounded-lg p-1 mt-2 w-[100%] cursor-pointer' vlaue='Programming Languages' name="Category" id="Category">
                 <option value="">Select Category</option>
                 <optgroup label="Aptitude">
                     <option value="">Numerical Ability</option>
                     <option value="saab">Logical Reasoning</option>
                     <option value="">Verbal English</option>
                </optgroup>
                <optgroup label="Technical">
                     <option value="">Programming Languages</option>
                     <option value="saab">Development</option>
                     <option value="saab">Database</option>
                </optgroup>
                <optgroup label="Computer Fundamentals">
                     <option value="">Operating Systems and Software</option>
                     <option value="saab">Networking and Internet</option>
                     <option value="saab">Database Management Systems</option>
                </optgroup>
                 </select>
             </div >
             <div className='text-sm font-medium text-zinc-800'>
              <label className='font-semibold text-sm cursor-pointer' htmlFor="duration">{"Duration (in minutes)"}</label> <br />
              <input className='w-[100%] cursor-pointer' type="range" min="10" max="60" step="10" name='duration' id='duration' />
              <div className='text-sm font-medium text-zinc-800 flex justify-between'>
                   <p>10</p>
                   <p>20</p>
                   <p>30</p>
                   <p>40</p>
                   <p>50</p>
                   <p>60</p>
              </div>
             </div>
             <div className='text-sm font-medium text-zinc-800 flex flex-col gap-1'>
                <p className='font-semibold text-sm text-zinc-700 mb-1 cursor-pointer'>Number of Questions</p>
                <div >
                <input type="radio" name='q_count' id='q_count1'/>
                <label htmlFor="q_count1" className='ms-2 cursor-pointer'>Less than 20 questions</label>
                </div>
                <div>
                <input type="radio" name='q_count' id='q_count2'/>
                <label htmlFor="q_count2" className='ms-2 cursor-pointer'>20-30 questions</label>
                </div>
                <div>
                <input type="radio" name='q_count' id='q_count3'/>
                <label htmlFor="q_count3" className='ms-2 cursor-pointer'>More than 30 questions</label>
                </div>
             </div>
        </div>
          
          <div className="w-[73%] h-[100%] p-10 pt-0 mb-3 flex justify-center rounded-lg bg-white shadow-inner">
              <div className='w-[100%] pt-10 grid grid-cols-4 gap-5 overflow-auto'>
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