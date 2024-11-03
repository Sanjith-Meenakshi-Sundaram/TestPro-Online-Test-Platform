import React from 'react';
import data from '../data/testdata';
function ManageUser(){
    return(
      <div className='px-5 h-[90vh] overflow-y-auto'>
      <p className='p-2 text-lg text-center border rounded mb-3 bg-blue-50'>
         Manage Users
      </p>
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
export default ManageUser;