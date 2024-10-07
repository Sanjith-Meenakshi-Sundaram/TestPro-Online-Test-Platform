import React from 'react'
import { useNavigate } from 'react-router-dom'

const PreTestPopup = ({setExamindex,examindex,startExam,testdetails}) => {

    const navigate=useNavigate()
    const handelStart=()=>{
       startExam(examindex);
    }
    
  return (
          <div className='w-full h-full overflow-auto rounded bg-zinc-200 px-10 py-4'>
              <h1 className='text-xl font-semibold text-center pb-2'>Get Ready to Shine!</h1>
               <div className='border-t-2 border-zinc-600 p-2'>
                    <h1 className='text-lg font-semibold'>Before You Begin</h1>
                    <ul className='list-disc gap-2 flex flex-col'>
                        <li>Stay Focused: This is your time to prove what you've learned. Find a quiet place where you can concentrate.</li>
                        <li>Manage Your Time: Test has a timer. Keep an eye on it, but don't rush—quality over speed!</li>
                        <li>Be Honest: Remember, this test is for your growth. Avoid distractions and focus on doing your best.</li>
                        <li>Use Your Resources Wisely: If you're stuck, think it through. Trust what you've studied!</li>
                    </ul>
               </div>
               <div className='border-b-2 border-zinc-600 p-2'>
                    <h1 className='text-lg font-semibold'>Test Details:</h1>
                    <ul className='list-disc gap-2 flex flex-col'>
                        <li>Test: {testdetails.title}</li>
                        <li>Total Questions: {testdetails.ques}</li>
                        <li>Time Allotted: {testdetails.time}</li>
                        <li>Test Category: {testdetails.category}</li>
                    </ul>
               </div>
               <div className='border-b-2 border-zinc-600 p-2 mb-3'>
                    <h1 className='text-lg font-semibold'>Test Details:</h1>
                    <ul className='list-disc gap-2 flex flex-col'>
                        <li>Read Each Question Carefully: Make sure you understand what's being asked before answering.</li>
                        <li>Plan Your Time: Don't spend too long on any one question. Move on if you're unsure and come back later.</li>
                        <li>Stay Calm and Confident: You've got this! Take deep breaths if you feel stressed</li>
                    </ul>
               </div>
                <div className='flex justify-end'>
                <button className='px-4 py-2 rounded bg-red-600 font-semibold text-zinc-100 mx-2'onClick={()=>{setExamindex()}}>Cancel</button>
                <button className='px-4 py-2 rounded bg-zinc-600 font-semibold text-zinc-100 mx-2' onClick={handelStart}>Start </button>
                </div>
          </div>
  )
}

export default PreTestPopup