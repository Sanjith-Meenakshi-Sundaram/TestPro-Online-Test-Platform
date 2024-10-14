import React from 'react'

function TestCard({test,index,setExamindex,setDetails}) {
  const handelStart=()=>{
    setExamindex(index+1);
    setDetails((pre)=>{
      return  {...pre,title:test.title,ques:test.questions.length,time:Math.floor(test.questions.length/2)}
    })
  }
  return (
    <div className='w-[10rem] h-[15rem] rounded overflow-hidden flex flex-col shadow-lg hover:scale-[1.02] transition-transform ease-in-out delay-400 z-[50] cursor-pointer'>
           <div className='w-[10rem] h-[10rem]'>
                <img className='w-[100%] h-[100%] rounded' src={test.image} alt="" />
           </div>
           <div className='px-2 pb-2 flex flex-col justify-between'>
              <div>
              <h2 className='text-base font-semibold m-1'>{test.title}</h2>
              <p className='text-sm'>{`${test.description.slice(0,50)}...`}</p>
              </div>
              <div>
              <button className='px-2 py-1 mt-2 rounded bg-[#01b4dc] text-sm font-semibold text-white' onClick={handelStart}>Start Test</button>
              </div>
           </div>
    </div>
  )
}

export default TestCard