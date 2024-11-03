import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUsers,faFilePen,faFileCirclePlus} from '@fortawesome/free-solid-svg-icons';
function Admin() {
  return (
      <>
         <div className='p-10 pt-0 flex'>
              {/* sidebar */}
               <div className='w-[20%] p-4 border shadow-lg rounded'>
                      <ul className='flex flex-col gap-6'>
                          <NavLink className={({isActive})=>`${isActive?"text-white bg-[#01b4dc] rounded p-1":""} ps-2`} to="/admin/users"><FontAwesomeIcon icon={faUsers} /> Manage Users</NavLink>
                          <NavLink className={({isActive})=>`${isActive?"text-white bg-[#01b4dc] rounded p-1":""} ps-2`} to="/admin/tests"><FontAwesomeIcon icon={faFilePen} /> Manage Tests</NavLink>
                          <NavLink className={({isActive})=>`${isActive?"text-white bg-[#01b4dc] rounded p-1":""} ps-2`} to="/admin/create"><FontAwesomeIcon icon={faFileCirclePlus} /> Create Test</NavLink>
                      </ul>
               </div>
               {/* main */}
               <div className='w-full'>
                    <Outlet/>
               </div>
         </div>
      </>
  )
}

export default Admin