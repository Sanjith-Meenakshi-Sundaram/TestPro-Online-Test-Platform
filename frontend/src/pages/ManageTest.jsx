import React from 'react'
import data from '../data/testdata'
import { NavLink, Outlet } from 'react-router-dom'

export const ManageTest = () => {
  return (
    <div className='px-5 h-[90vh] overflow-y-auto'>
          <NavLink to="/admin/create" className='p-2 flex gap-4 text-lg border rounded mb-3 bg-blue-50'>
             <p>+</p>
             <p>create new test</p>
          </NavLink>
          <table className='w-full p-5 border shadow-lg rounded'>
               <thead className='border-b'>
               <th className='p-2'>S.No.</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th className='flex gap-5 p-2'>
                       <button onClick={()=>setTest(test)}>Edit</button>
                       <button>Delete</button>
                    </th>
               </thead>
               <tbody>
               {data.map((test,idx)=>{
                  return <tr key={idx} className='border-b'>
                    <td className='text-center p-2'>{idx+1}</td>
                    <td className='text-center'>{test.title}</td>
                    <td className='text-center'>{test.category}</td>
                    <td className='flex gap-5 p-2 items-center'>
                       <button onClick={()=>setTest(test)}>Edit</button>
                       <button>Delete</button>
                    </td>
                    </tr>
 
               })}
            </tbody>
          </table>
    </div>
  )
}

export default ManageTest;