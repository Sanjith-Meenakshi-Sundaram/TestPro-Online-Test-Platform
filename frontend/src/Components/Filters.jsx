import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFilter} from '@fortawesome/free-solid-svg-icons'

function Filters({setFilter}) {
    return(<>
         <div className="w-[100%] h-[100vh] lg:h-full bg-white rounded-lg p-6 lg:p-12 pt-8 m-0 flex flex-col gap-8 justify-start overflow-auto">
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
                 <select className='outline-none border-2 rounded-lg p-1 mt-2w-[100%] sm:w-[70%] md:w-[50%] lg:w-[100%] cursor-pointer' vlaue='Programming Languages' name="Category" id="Category">
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
              <input className='w-[100%] sm:w-[70%] md:w-[50%] lg:w-[100%] cursor-pointer' type="range" min="10" max="60" step="10" name='duration' id='duration' />
              <div className='w-[100%] sm:w-[70%] md:w-[50%] lg:w-[100%] text-sm font-medium text-zinc-800 flex justify-between'>
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
             <button onClick={(e)=>{e.preventDefault(); return setFilter((pre)=>!pre)}} className='bg-[#01b4dc] p-2 mx-auto w-[50%] text-center rounded lg:hidden'>Apply</button>
        </div>
    </>
    )
}

export default Filters;