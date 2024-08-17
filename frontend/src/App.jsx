import { useState } from "react"
import Finish from "./pages/Finish"
import Navbar from "./Components/Navbar"
import Home from "./pages/Home"
import Test from "./pages/Test"
import testdata from './data/testdata'
import Footer from "./Components/Footer"
import {Routes,Route, useNavigate} from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Admin from "./pages/Admin"

function App() {

    const [data,setData]=useState([...testdata[0].questions]);
    const [curruser,setCurruser]=useState();
    const navigate=useNavigate();
    const [testdetails,setDetails]=useState();

    const startExam=(index)=>{
      if(!curruser){
        navigate('/login');
        return;
      }
      setData([...testdata[index-1].questions]);
      navigate('/test');
    }


  return (<>
     
       <Navbar curruser={curruser} setCurruser={setCurruser}/>
      <Routes>
          
        <Route path="/" element={<Home testdata={testdata} startExam={startExam} curruser={curruser}/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/login" element={<Login setCurruser={setCurruser}/>}/>
        <Route path="/register" element={<Register setCurruser={setCurruser}/>}/>
        <Route path="/test" element={<Test data={data} setData={setData} curruser={curruser}/>}/>
        <Route path="/result" element={<Finish data={data} curruser={curruser}/>}/>

      </Routes>
      
        <Footer/>

      </> 
  )
}

export default App;
