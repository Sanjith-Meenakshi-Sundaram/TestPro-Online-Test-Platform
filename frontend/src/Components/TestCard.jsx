import React from 'react'

function TestCard({test,index,setExamindex}) {
  const handelStart=()=>{
    setExamindex(index+1)
  }
  return (
    <div className='w-[15rem] h-[20rem] border-2 rounded overflow-hidden flex flex-col'>
           <div className='w-[15rem] h-[10rem]'>
                <img className='w-[100%] h-[100%] rounded' src={test.image} alt="" />
           </div>
           <div className='px-2 pb-2'>
              <h2 className='text-xl font-semibold m-1'>{test.title}</h2>
              <p className='my-2'>{test.description}</p>
              <button className='px-5 py-2 rounded bg-red-600 font-semibold text-zinc-100' onClick={handelStart}>Start Test</button>
           </div>
    </div>
  )
}

export default TestCard