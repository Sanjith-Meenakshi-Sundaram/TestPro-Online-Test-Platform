import React from 'react'
import { NavLink } from 'react-router-dom'
import {faHouse, faBookmark, faSquarePollVertical,faLayerGroup, faCalendarDays, faCrown} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Admin() {
  return (
    <div className='flex'>
    <div className='w-[40%]'>
    <div className='border-e-2 p-6 fixed bg-white'>
           
                 <NavLink  className="flex justify-start items-center px-5 py-2 gap-4 text-xl border-b-2 mb-3"><FontAwesomeIcon icon={faHouse}/><p>Manage Tests</p></NavLink>
                 <NavLink  className="flex justify-start items-center px-5 py-2 gap-4 text-xl border-b-2 mb-3"><FontAwesomeIcon icon={faBookmark}/><p>Create New Test</p></NavLink>
                 <NavLink  className="flex justify-start items-center px-5 py-2 gap-4 text-xl border-b-2 mb-3"> <FontAwesomeIcon icon={faSquarePollVertical} /><p>User Management</p></NavLink>
                 <NavLink  className="flex justify-start items-center px-5 py-2 gap-4 text-xl border-b-2 mb-3"><FontAwesomeIcon icon={faLayerGroup} /><p>Test Analytics</p></NavLink>
                 <NavLink  className="flex justify-start items-center px-5 py-2 gap-4 text-xl border-b-2 mb-3"><FontAwesomeIcon icon={faCalendarDays} /><p>Upcoming Exams</p></NavLink>
        
            
    </div>
    </div>
    <div className='flex justify-around flex-wrap gap-4 p-5'>
        <h1 className='text-center px-4 mx-4 py-4 border rounded-lg text-zinc-100 font-semibold bg-red-500 text-xl flex gap-2 justify-center items-center'><p>Welcome to the Admin Dashboard</p></h1>

        
        
    </div>
</div>
  )
}

export default Admin