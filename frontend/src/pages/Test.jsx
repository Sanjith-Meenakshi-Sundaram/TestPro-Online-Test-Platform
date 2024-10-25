import React, { useState,useEffect,useRef } from 'react'
import Timmer from "../Components/Timmer"

import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleLeft,faAngleRight,faCircleCheck, faUser,faClock} from '@fortawesome/free-solid-svg-icons'

export const Test = ({setisTest,exitfull,fullscreen,data,setData,curruser,testdetails}) => {
  
  const [currQuestionIndex,setCurrQuestion]= useState(0);
  const [score,setScore]= useState(0);
  const [isSubmiting,setisSubmiting]=useState(false);
  const navigate=useNavigate();
  useEffect(()=>{
    fullscreen();
    setisTest(true);
    if(!curruser){
      navigate('/');
      return;
    }
    setData(data.map((que)=>{
      return{...que,isVisited:false,selectedOption:"",markforreview:false}
    }));
    return(()=>{
      if(!isSubmiting){
        const confirmed = window.confirm('You are going to end the test. Are you sure you want to leave?');
        if (!confirmed) {
          navigate('/test');
         return;
        }
      }
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
    if(data[currQuestionIndex].selectedOption===option){
    const newdata=[...data];
    newdata[currQuestionIndex].selectedOption="";
    setData(newdata);
    }
    else{
    const newdata=[...data];
    newdata[currQuestionIndex].selectedOption=option;
    setData(newdata);
    }
  }

  const handelVisited=()=>{
    const newdata=[...data];
    newdata[currQuestionIndex].isVisited=true;
    setData(newdata);
  }

  const handelmarkforReview=()=>{
    const newdata=[...data];
    newdata[currQuestionIndex].markforreview=!newdata[currQuestionIndex].markforreview;
    setData(newdata);
  }

  const handelFinish=()=>{
    console.log("submitted");
    setisSubmiting(true);
    navigate('/result',{replace:true});
  }

  return (<>
   <div className='bg-zinc-100 flex h-[100vh]'>
    <div className='w-[75%] flex flex-col justify-between' >
      <div>
      <div className='bg-zinc-200 py-2'>
         <h1 className='text-xl text-center font-semibold'>Online - {testdetails.title}</h1>
      </div>
      <div className='px-5 py-2 border-b-2 border-zinc-300 h-[8.8rem] flex justify-start gap-4'>
        <div>
             <img className='w-[7rem]' src="https://cdn-icons-png.flaticon.com/512/3437/3437393.png" alt="" />
        </div>
        <div className='text-lg'>
       <h1><span className='font-semibold'>Candidate Name:</span> {curruser.username}</h1>
       <h1><span className='font-semibold'>Totel Questions:</span> {data.length}</h1>
       <h1><span className='font-semibold'>Test:</span> {testdetails.title}</h1>
       <h1><span className='font-semibold'>Time:</span> {testdetails.time} min</h1>
       </div>
      </div>
<ul className='pl-5 pr-8 pb-2 h-[70%] flex flex-col justify-center'>
<h1 className='text-xl pb-3 mb-3 border-b-2 border-zinc-500 font-semibold'>{`Question No. ${currQuestionIndex+1}`}</h1>
<h1 className='text-2xl mb-5 font-medium'>{data[currQuestionIndex].question}</h1>
  {data[currQuestionIndex].options.map((option,index)=>{
    return (
      <li key={index} className={`border ${data[currQuestionIndex].selectedOption===option?"border-2 drop-shadow-xl border-blue-400 bg-zinc-400":"border-zinc-400"} cursor-pointer rounded text-lg px-2 py-3 my-2 `} onClick={()=>(handelMark(option))}>
          {`${index+1}. ${option}`}
      </li>
    )
  })}
</ul>
</div>
<div>
<div className=' flex justify-between px-5 py-3 border-t-2 border-zinc-300'>
   <div>
         <button className={`px-5 py-2 rounded bg-zinc-700 font-semibold text-zinc-100 mx-2}`} onClick={handelmarkforReview}>{data[currQuestionIndex].markforreview?"Unmark For Review":"Mark for review"}</button>
   </div>
   <div  className=' flex justify-end'>
         <button className={`px-5 py-2 rounded bg-zinc-700 font-semibold text-zinc-100 mx-2 ${currQuestionIndex==0?"hidden":""}`} onClick={()=>{handelNext(currQuestionIndex-1)}}><FontAwesomeIcon icon={faAngleLeft} /> Prev</button>
         <button className={`px-5 py-2 rounded bg-blue-600 font-semibold text-zinc-100 mx-2 ${currQuestionIndex==data.length-1?"hidden":""}`} onClick={()=>{handelNext(currQuestionIndex+1)}}>Next <FontAwesomeIcon icon={faAngleRight} /></button>
         <button className={`px-4 py-2 rounded bg-green-600 font-semibold text-zinc-100 mx-2 ${currQuestionIndex!=data.length-1?"hidden":""}`} onClick={()=>{handelFinish()}}>submit and finish</button>
         <button className={`px-4 py-2 rounded bg-red-600 font-semibold text-zinc-100 mx-2`} onClick={()=>{handelFinish()}}>Finish</button>
   </div>
</div>
<div className='flex justify-around py-3'>
    <div className='flex gap-2'>
      <div className='h-5 w-5 rounded-full bg-white border-2 border-zinc-400'></div>
      <h1>Not Attemted</h1>
    </div>
    <div className='flex gap-2'>
      <div className='h-5 w-5 rounded-full bg-green-500'></div>
      <h1>Answered</h1>
    </div>
    <div className='flex gap-2'>
      <div className='h-5 w-5 rounded-full bg-blue-500'></div>
      <h1>Current Question</h1>
    </div>
    <div className='flex gap-2'>
      <div className='h-5 w-5 rounded-full bg-purple-500'></div>
      <h1>Marked For Review</h1>
    </div>
    <div className='flex gap-2'>
      <div className='h-5 w-5 rounded-full bg-red-500 relative'></div>
      <h1>Not Answered</h1>
    </div>
</div>
</div>
      </div>
      
   <div className= 'w-[25%] bg-white h-[100vh] overflow-hidden pb-60'>
        <div className='sticky top-0 bg-white'>
          <h1 className='text-center bg-zinc-300 p-2 text-lg font-500 font-semibold'><FontAwesomeIcon icon={faClock}/> Time Left</h1>
          <Timmer Finish={handelFinish} minuts={Math.floor(data.length/2)}/>
        </div>
        <h1 className='text-lg font-semibold text-center w-[100%] py-2 bg-zinc-300'>Question Panel</h1>
        <div className='flex flex-wrap justify-center h-full overflow-y-auto'>
      {
        data.map((que,index)=>{
          return (
            <div key={index} className={`relative rounded-full py-3 px-4 border-2 m-2 font-500 cursor-pointer ${que.markforreview?"bg-purple-500":currQuestionIndex==index?"bg-blue-500":que.selectedOption?"bg-green-500":que.isVisited?"bg-red-500":""}`} onClick={()=>{handelNext(index)}}>
              {index+1<10?`0${index+1}`:index+1}
              {que.markforreview&&que.selectedOption&&<div className='absolute top-7'><FontAwesomeIcon icon={faCircleCheck} style={{color: "#65e697",}} /></div>}
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