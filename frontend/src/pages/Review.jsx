import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Review({data}) {
  const [currQuestionIndex,setCurrQuestion]= useState(0);
  const navigate=useNavigate();

  const handelNext=(index)=>{
    setCurrQuestion(index);
  }

  return(<>
    <div className='bg-zinc-200 flex flex-col lg:flex-row gap-4 lg:gap-10 justify-center p-10 h-[100vh] items-center'>
     <div className='w-[100%] lg:w-[50%]' >
       <div className='py-5 h-[5rem]'>
          <h1 className='text-2xl'>Review Answers</h1>
       </div>
       <div>
       <h1 className='text-xl mb-5'>{`${currQuestionIndex+1}.  ${data[currQuestionIndex].question}`}</h1>
 
 <ul>
   {data[currQuestionIndex].options.map((option,index)=>{
     return (
       <li key={index} className={`border 
        ${data[currQuestionIndex].selectedOption===option&&option===data[currQuestionIndex].correctOption?"border-2 drop-shadow-xl border-blue-400 bg-green-400":"border-zinc-400"} 
       ${data[currQuestionIndex].correctOption===option&&option!==data[currQuestionIndex].selectedOption?"border-2 drop-shadow-xl border-blue-400 bg-blue-400":"border-zinc-400"}
       ${data[currQuestionIndex].selectedOption===option&&option!==data[currQuestionIndex].correctOption?"border-2 drop-shadow-xl border-blue-400 bg-red-400":"border-zinc-400"}
        cursor-pointer rounded text-lg px-2 py-3 my-2 `}>
           {`${index+1}. ${option}`}
       </li>
     )
   })}
 </ul>
 
 <div className=' flex justify-end mt-5'>
 
 <button className={`px-5 py-2 rounded bg-zinc-700 font-semibold text-zinc-100 mx-2 ${currQuestionIndex==0?"hidden":""}`} onClick={()=>{handelNext(currQuestionIndex-1)}}>prev</button>
 <button className={`px-5 py-2 rounded bg-blue-600 font-semibold text-zinc-100 mx-2 ${currQuestionIndex==data.length-1?"hidden":""}`} onClick={()=>{handelNext(currQuestionIndex+1)}}>Next</button>
 <button className={`px-4 py-2 rounded bg-green-600 font-semibold text-zinc-100 mx-2 ${currQuestionIndex!=data.length-1?"hidden":""}`} onClick={()=>{navigate("/home",{replace:true})}}>Back To Home</button>
 
 </div>
       </div>
     </div>
 
      
    <div className= 'w-[100%] lg:w-[25%] border-2 rounded-xl bg-white h-[35rem] overflow-y-auto'>
         <h1 className='text-lg font-semibold text-center w-[100%] py-4'>Answer Status</h1>
         <div className='flex flex-wrap justify-center'>
       {
         data.map((que,index)=>{
           return (
             <div key={index} className={`rounded-full py-3 px-4 border-2 m-2 font-500 cursor-pointer ${currQuestionIndex==index?"bg-blue-500":que.selectedOption?"bg-green-500":que.isVisited?"bg-red-500":""} ${que.selectedOption&&data[index].correctOption!=data[index].selectedOption?"bg-orange-500":""}`} onClick={()=>{handelNext(index)}}>
               {index+1<10?`0${index+1}`:index+1}
             </div>
           )
         })
       }
       </div>
 
 
    </div>
    </div>
    </>
   )
 }

export default Review