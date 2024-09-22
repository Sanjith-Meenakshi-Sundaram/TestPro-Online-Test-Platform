import React, { useEffect } from 'react'

function Timmer({Finish,minuts}) {
  const [time, setTime] = React.useState({
    hrs:0,
    mnt:0,
    sec:0
  });
  let id;
  const increase=(time)=>{
    setTime((time)=>{
      if(time.hrs==0&&time.mnt==0&&time.sec==0){
        Finish();
      }
      else if(time.mnt==0&&time.sec==0){
        return {hrs:time.hrs-1,
        mnt:59,
        sec:59}
      }
      else if(time.sec==0){
       return{
        hrs:time.hrs,
        mnt:time.mnt-1,
        sec:59}
      }
      else{
        return {
        hrs:time.hrs,
        mnt:time.mnt,
        sec:time.sec-1
      }
    }
      // return {
      //   hrs:time.hrs,
      //   mnt:time.mnt,
      //   sec:time.sec-1
      // }
    }
    );
  }

  useEffect(()=>{
    setTime(()=>{
      return {
        hrs:Math.floor(minuts/60),
        mnt:minuts-(Math.floor(minuts/60)*60),
        sec:0
      };
    })
     id= setInterval(increase,1000);

     return(()=>clearInterval(id));
  },[])



  return (
    <div>
     <h1>{`${time.hrs<10?`0${time.hrs}`:`${time.hrs}`}:${time.mnt<10?`0${time.mnt}`:`${time.mnt}`}:${time.sec<10?`0${time.sec}`:`${time.sec}`}`}</h1>
    </div>
  )
}

export default Timmer