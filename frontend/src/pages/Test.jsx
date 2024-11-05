import React, { useState,useEffect,useRef } from 'react'
import Timmer from "../Components/Timmer"
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleLeft,faAngleRight,faCircleCheck, faBars,faClock} from '@fortawesome/free-solid-svg-icons'

export const Test = ({setisTest,exitfull,fullscreen,data,setData,curruser,testdetails}) => {
  
  const [currQuestionIndex,setCurrQuestion]= useState(0);
  const [score,setScore]= useState(0);
  const [sideQue,setSideQue]=useState(false);
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
      exitfull();
      setisTest(false);
     // handelFinish();
    });
  },[])

  const handelNext=(e,index)=>{
    //e.preventDefault();
    if(data[currQuestionIndex].correctOption===data[currQuestionIndex].selectedOption){
        setScore((pre)=>pre+1);
    }
    handelVisited(currQuestionIndex);
    setCurrQuestion(index);
    setSideQue(false);
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
    navigate('/result',{replace:true});
  }

  return (<>
   <div className='h-[100vh] bg-zinc-100 flex flex-col lg:flex-row'>
    <div className='w-[100%] lg:w-[75%] h-[100%] pb-5 flex flex-col justify-between' >
      <div>
      <div className='bg-zinc-300 py-2 px-4 flex justify-around items-center'>
         <button onClick={()=>{setSideQue((pre)=>(!pre))}} className='pe-2 lg:hidden'><FontAwesomeIcon icon={faBars} /></button>
         <h1 className='text-xl text-center font-semibold'>Online - {testdetails.title}</h1>
      </div>
      <div className='px-5 py-2 border-b-2 border-zinc-300 flex justify-start gap-4'>
        <div>
             <img className='w-[4rem] lg:w-[7rem]' src="https://cdn-icons-png.flaticon.com/512/3437/3437393.png" alt="" />
        </div>
        <div className='text-lg'>
       <h1><span className='font-semibold'>Candidate Name:</span> {curruser.username}</h1>
       <h1><span className='font-semibold'>Totel Questions:</span> {data.length}</h1>
       <h1 className='hidden lg:block'><span className='font-semibold'>Test:</span> {testdetails.title}</h1>
       <h1 className='hidden lg:block'><span className='font-semibold'>Time:</span> {testdetails.time} min</h1>
       </div>
      </div>
      <div className='sticky top-0 bg-zinc-100 border-b-2 flex justify-around lg:hidden'>
          <h1 className='text-center p-2 text-lg font-500 font-semibold'><FontAwesomeIcon icon={faClock}/> Time Left</h1>
          <Timmer Finish={handelFinish} minuts={Math.floor(data.length/2)}/>
        </div>
<ul className='pl-5 pr-8 py-2 flex flex-col justify-center'>
<h1 className='lg:text-xl pb-3 mb-3 border-b-2 border-zinc-500 font-semibold'>{`Question No. ${currQuestionIndex+1}`}</h1>
<h1 className='lg:text-2xl mb-5 font-medium'>{data[currQuestionIndex].question}</h1>
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
         <button className={`px-2 py-2 text-xs lg:text-sm lg:px-4 rounded bg-zinc-700 font-semibold text-zinc-100 mx-2}`} onClick={handelmarkforReview}>{data[currQuestionIndex].markforreview?"Unmark For Review":"Mark for review"}</button>
   </div>
   <div  className=' flex justify-end'>
         <button className={`px-2 py-2 text-xs lg:text-sm lg:px-4 rounded bg-zinc-700 font-semibold text-zinc-100 mx-2 ${currQuestionIndex==0?"hidden":""}`} onClick={(e)=>{handelNext(e,currQuestionIndex-1)}}><FontAwesomeIcon icon={faAngleLeft} /> Prev</button>
         <button className={`px-2 py-2 text-xs lg:text-sm lg:px-4 rounded bg-blue-600 font-semibold text-zinc-100 mx-2 ${currQuestionIndex==data.length-1?"hidden":""}`} onClick={(e)=>{handelNext(e,currQuestionIndex+1)}}>Save & Next <FontAwesomeIcon icon={faAngleRight} /></button>
         <button className={`px-2 py-2 text-xs lg:text-sm lg:px-4 rounded bg-green-600 font-semibold text-zinc-100 mx-2 ${currQuestionIndex!=data.length-1?"hidden":""}`} onClick={()=>{handelFinish()}}>submit and finish</button>
         <button className={`px-2 py-2 text-xs lg:text-sm lg:px-4 rounded bg-red-600 font-semibold text-zinc-100 mx-2`} onClick={()=>{handelFinish()}}>Finish</button>
   </div>
</div>
<div className='flex justify-between flex-wrap p-3'>
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
      
   <div className= {`absolute lg:static ${sideQue?"right-[0]":"right-[100%]"} transition-all ease-in-out delay-150 duration-200 w-[100%] lg:w-[25%] bg-white h-[100vh] overflow-hidden pb-10 lg:pb-60`}>
        <div className='sticky top-0 bg-white hidden lg:block'>
          <h1 className='text-center bg-zinc-300 p-2 text-lg font-500 font-semibold'><FontAwesomeIcon icon={faClock}/> Time Left</h1>
          <Timmer Finish={handelFinish} minuts={Math.floor(data.length/2)}/>
        </div>
        <div className='flex justify-around bg-zinc-300 px-5'>
        <button onClick={()=>{setSideQue((pre)=>(!pre))}} className='ps-5 lg:hidden'><FontAwesomeIcon icon={faBars} /></button>
        <h1 className='text-lg font-semibold text-center w-[100%] py-2'>Question Panel</h1>
        </div>
        <div className='flex flex-wrap justify-center h-full overflow-y-auto'>
      {
        data.map((que,index)=>{
          return (
            <div key={index} className={`relative rounded-[20%] h-[4rem] w-[4rem] text-center pt-3  border-2 m-2 font-500 cursor-pointer ${que.markforreview?"bg-purple-500":currQuestionIndex==index?"bg-blue-500":que.selectedOption?"bg-green-500":que.isVisited?"bg-red-500":""}`} onClick={(e)=>{handelNext(e,index)}}>
              {index+1<10?`0${index+1}`:index+1}
              {que.markforreview&&que.selectedOption&&<div className='absolute top-9 left-[1.4rem]'><FontAwesomeIcon icon={faCircleCheck} style={{color: "#65e697",}} /></div>}
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