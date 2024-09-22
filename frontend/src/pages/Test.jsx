import React, { useState,useEffect,useRef } from 'react'
import Timmer from "../Components/Timmer"

import { useNavigate } from 'react-router-dom';

export const Test = ({setisTest,exitfull,fullscreen,data,setData,curruser}) => {
  
  const [currQuestionIndex,setCurrQuestion]= useState(0);
  const [score,setScore]= useState(0);
  const navigate=useNavigate();
  useEffect(()=>{
    fullscreen();
    setisTest(true);
    if(!curruser){
      navigate('/');
      return;
    }
    setData(data.map((que)=>{
      return{...que,isVisited:false,selectedOption:""}
    }));
    return(()=>{
      exitfull();
      setisTest(false);
     // handelFinish();
    });
  },[])

  const handelNext=(index)=>{
    if(data[currQuestionIndex].correctOption===data[currQuestionIndex].selectedOption){
        setScore((pre)=>pre+1);
    }
    handelVisited(currQuestionIndex);
    setCurrQuestion(index);
  }

  const handelMark=(option)=>{
    const newdata=[...data];
    newdata[currQuestionIndex].selectedOption=option;
    setData(newdata);
  }

  const handelVisited=()=>{
    const newdata=[...data];
    newdata[currQuestionIndex].isVisited=true;
    setData(newdata);
  }

  const handelFinish=()=>{
    console.log("submitted");
     navigate('/result');
  }

  return (<>
   <div className='bg-zinc-200 flex gap-10 justify-center p-10 h-[85vh] items-center'>
    <div className='w-[50%]' >
      <div className='py-5 h-[5rem]'>
         <h1 className='text-2xl'>Java Quiz</h1>
         <Timmer Finish={handelFinish} minuts={data.length}/>
      </div>
      <div>
      <h1 className='text-xl mb-5'>{`${currQuestionIndex+1}.  ${data[currQuestionIndex].question}`}</h1>

<ul>
  {data[currQuestionIndex].options.map((option,index)=>{
    return (
      <li key={index} className={`border ${data[currQuestionIndex].selectedOption===option?"border-2 drop-shadow-xl border-blue-400 bg-zinc-400":"border-zinc-400"} cursor-pointer rounded text-lg px-2 py-3 my-2 `} onClick={()=>(handelMark(option))}>
          {`${index+1}. ${option}`}
      </li>
    )
  })}
</ul>

<div className=' flex justify-end mt-5'>

<button className={`px-5 py-2 rounded bg-zinc-700 font-semibold text-zinc-100 mx-2 ${currQuestionIndex==0?"hidden":""}`} onClick={()=>{handelNext(currQuestionIndex-1)}}>prev</button>
<button className={`px-5 py-2 rounded bg-blue-600 font-semibold text-zinc-100 mx-2 ${currQuestionIndex==data.length-1?"hidden":""}`} onClick={()=>{handelNext(currQuestionIndex+1)}}>Next</button>
<button className={`px-4 py-2 rounded bg-red-600 font-semibold text-zinc-100 mx-2 ${currQuestionIndex!=data.length-1?"hidden":""}`} onClick={()=>{handelFinish()}}>Finish</button>

</div>
      </div>
    </div>

     
   <div className= 'w-[25%] border-2 rounded-xl bg-white h-[35rem] overflow-y-auto'>
        <h1 className='text-lg font-semibold text-center w-[100%] py-4'>Answer Status</h1>
        <div className='flex flex-wrap justify-center'>
      {
        data.map((que,index)=>{
          return (
            <div key={index} className={`rounded-full py-3 px-4 border-2 m-2 font-500 cursor-pointer ${currQuestionIndex==index?"bg-blue-500":que.selectedOption?"bg-green-500":que.isVisited?"bg-red-500":""}`} onClick={()=>{handelNext(index)}}>
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

export default Test;