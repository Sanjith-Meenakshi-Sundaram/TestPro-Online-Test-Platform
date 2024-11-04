import {useState} from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUsers,faFilePen,faFileCirclePlus,faChevronDown} from '@fortawesome/free-solid-svg-icons';
function Admin() {
  const [AdminNav,setAdminNav]=useState(false);
  return (
      <>
         <div className='p-4 lg:p-10 pt-0 flex flex-col lg:flex-row'>
              {/* sidebar */}
              <button onClick={(e)=>{e.preventDefault(); return setAdminNav((pre)=>!pre)}} className='text-start lg:hidden font-semibold border-[#01b4dc] pb-4'>Admin Options <FontAwesomeIcon icon={faChevronDown} /></button>
               <div onClick={(e)=>{e.preventDefault(); return setAdminNav((pre)=>!pre)}} className={`w-[100%] lg:w-[20%] h-[100vh] p-4 pt-0 lg:pt-4 lg:border shadow-lg rounded absolute  left-[0] ${AdminNav?"top-[5.5rem] lg:top-[0]":"bottom-[100%]"} transition-all ease-in-out delay-150 duration-200 lg:relative`}>
                      
                      <ul className=' w-[full] h-[full] flex flex-col gap-2 lg:gap-6 bg-white'>
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