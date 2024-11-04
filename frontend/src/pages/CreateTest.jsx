import { useState } from "react";

function CreateTest(){
    const [data,setData]=useState({
        title:'',
        cat:'',
        img:'',
        dis:'',
        questions:[]
       });
    const [ques,setQue]=useState({
        que:'',
        ans:'',
        options:["","","",""]
    })
    const [err,setError]=useState({
        que:'',
        test:''
    });
    function handelSubmit(e){
           e.preventDefault();
           console.log(data);
           if(data.title==''||data.cat==''||data.img==''||data.dis==''){
             setError((pre)=>{
               return{
                  ...pre,
                  test:'All fields are required'
                }
             })
             return;
           }
           setData({
             title:'',
             cat:'',
             img:'',
             dis:'',
             questions:[]
 
           });
    }
    function handelAddQue(e){
       e.preventDefault();
       if(ques.que==''||ques.ans==''||ques.options[0]==''||ques.options[1]==''||ques.options[2]==''||ques.options[3]==''){
         setError((pre)=>{
           return{
             ...pre,
             que:'All fields are required'
           }
         })
         return;
       }
       if(ques.ans!=ques.options[0]&&ques.ans!=ques.options[1]&&ques.ans!=ques.options[2]&&ques.ans!=ques.options[3]){
         setError((pre)=>{
           return{
             ...pre,
             que:'Answer should be one of the options'
           }
         })
         return;
       }
       const newdata={...data,questions:[...data.questions,ques]};
       setData(newdata);
       setQue({
         que:'',
         ans:'',
         options:["","","",""]
       })
    }
    function handelDelete(){
        const newdata={...data,questions:data.questions.filter((que,idx)=>idx!=0)};
        setData(newdata);
    }
    return(
    <>
    
          <div className="px-2 lg:px-5 h-[90vh] overflow-y-auto">
               <h1 className="p-2 border rounded mb-3 text-lg text-center font-semibold">Create New Test</h1>
               <form className="border shadow-lg rounded p-5 lg:px-20 flex flex-col gap-4 cursor-pointer">
                    <label htmlFor="title">Title</label>
                    <input onChange={(e)=>{setData((pre)=>{setError({test:'',que:''}); return{...pre,title:e.target.value}})}} value={data.title} className="p-2 border rounded shadow" type="text" id="title" />
                    <label htmlFor="cat">Category</label>
                    <input onChange={(e)=>{setData((pre)=>{setError({test:'',que:''}); return{...pre,cat:e.target.value}})}} value={data.cat} className="p-2 border rounded shadow" type="text" id="cat" />
                    <label htmlFor="img">Image Url</label>
                    <input onChange={(e)=>{setData((pre)=>{setError({test:'',que:''}); return{...pre,img:e.target.value}})}} value={data.img} className="p-2 border rounded shadow" type="text" id="img"/>
                    <label htmlFor="dis">discription</label>
                    <textarea onChange={(e)=>{setData((pre)=>{setError({test:'',que:''}); return{...pre,dis:e.target.value}})}} value={data.dis} className="p-2 border rounded shadow" rows="6" name="" id="dis"></textarea>
                             
                             <form className="border shadow-lg rounded p-5 lg:px-20 flex flex-col gap-4 cursor-pointer">
                                <h1>Add Question</h1>
                                <input onChange={(e)=>{setQue((pre)=>{setError({test:'',que:''}); return{...pre,que:e.target.value}})}} value={ques.que} className="p-2 border rounded shadow" type="text" placeholder="Question"/>
                                <input onChange={(e)=>{setQue((pre)=>{setError({test:'',que:''}); return{...pre,options:[e.target.value,pre.options[1],pre.options[2],pre.options[3]]}})}} value={ques.options[0]} className="p-2 border rounded shadow" type="text" placeholder="Option 1" />
                                <input onChange={(e)=>{setQue((pre)=>{setError({test:'',que:''}); return{...pre,options:[pre.options[0],e.target.value,pre.options[2],pre.options[3]]}})}} value={ques.options[1]} className="p-2 border rounded shadow" type="text" placeholder="Option 2" />
                                <input onChange={(e)=>{setQue((pre)=>{setError({test:'',que:''}); return{...pre,options:[pre.options[0],pre.options[1],e.target.value,pre.options[3]]}})}} value={ques.options[2]} className="p-2 border rounded shadow" type="text" placeholder="Option 3" />
                                <input onChange={(e)=>{setQue((pre)=>{setError({test:'',que:''}); return{...pre,options:[pre.options[0],pre.options[1],pre.options[2],e.target.value]}})}} value={ques.options[3]} className="p-2 border rounded shadow" type="text" placeholder="Option 4" />
                                <input onChange={(e)=>{setQue((pre)=>{setError({test:'',que:''}); return{...pre,ans:e.target.value}})}} value={ques.ans} className="p-2 border rounded shadow" type="text" placeholder="Correct Option" />
                                {err.que!=''&&<p className="text-red-500">{err.que}</p>}
                                <button onClick={handelAddQue} className="p-1 px-4 border-2 border-[#01b4dc] rounded w-[5rem]">Add</button>
                             </form>
                             <div className="border shadow-lg rounded p-2 lg:p-5 cursor-pointer">
                                <p className="text-center font-semibold mb-6 text-lg">Questions</p>
                                {data.questions.map((ques,idx)=>{
                                    return <div className="flex justify-between lg:gap-5 my-1 lg:w-[60%]">
                                        <p className="py-1 px-2 font-semibold" key={idx}>Q.{idx+1} {ques.que.slice(0,15)+"..."}</p>
                                        <button onClick={(e)=>{e.preventDefault(); return handelDelete(idx); }} className="p-1 lg:px-4 bg-[#01b4dc] font-semibold text-white rounded w-[5rem]">delete</button>
                                    </div>
                                })}
                             </div>
                             {err.test?<p className="text-red-500">{err.test}</p>:null}
                    <button onClick={handelSubmit} className="p-1 px-4 font-semibold text-white bg-[#01b4dc] rounded w-[5rem]">Save</button>
               </form>
          </div>

    </>
    )
}
export default CreateTest;