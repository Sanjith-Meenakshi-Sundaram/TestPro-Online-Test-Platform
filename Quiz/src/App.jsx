import { useState } from "react"
import Finish from "./Components/Finish"
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import Test from "./Components/Test"
import testdata from './data/javaQuiz'
import Footer from "./Components/Footer"
import {Routes,Route, useNavigate} from "react-router-dom"
import Login from "./Components/Login"
import Register from "./Components/Register"
import Admin from "./Components/Admin"

function App() {

    const [data,setData]=useState([...testdata[0].questions]);
    const [curruser,setCurruser]=useState();
    const navigate=useNavigate();
    const [testdetails,setDetails]=useState();

    const startExam=(index)=>{
      setData([...testdata[index-1].questions]);
      navigate('/test');
    }


  return (<>
     
       <Navbar curruser={curruser} setCurruser={setCurruser}/>
      <Routes>
          
        <Route path="/" element={<Home testdata={testdata} startExam={startExam}/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/login" element={<Login setCurruser={setCurruser}/>}/>
        <Route path="/register" element={<Register setCurruser={setCurruser}/>}/>
        <Route path="/test" element={<Test data={data} setData={setData}/>}/>
        <Route path="/result" element={<Finish data={data}/>}/>

      </Routes>
      
        <Footer/>

      </> 
  )
}

export default App;
