import { useState, useRef } from "react"
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
import Review from "./pages/Review"

function App() {

    const [data,setData]=useState([...testdata[0].questions]);
    const [curruser,setCurruser]=useState();
    const navigate=useNavigate();
    const [testdetails,setDetails]=useState({
      ques:0,
      time:0,
      category: "Tech",
      title:""
    });
    const [isTest,setisTest]=useState(false);

    const startExam=(index)=>{
      if(!curruser){
        navigate('/login');
        return;
      }
      setData([...testdata[index-1].questions]);
      // setDetails((pre)=>{
      //   return {...pre,ques:testdata[index-1].questions.length,time:testdata[index-1].questions.length/2,title:testdata[index-1].title}
      // })
      navigate('/test');
    }


    //controlling full screen in test
    if (!document.fullscreenEnabled) {
      console.error('Your browser does not support fullscreen mode.');
    }
    const elementRef = useRef(null);
  const handleFullscreen = () => {
    if (elementRef.current.requestFullscreen) {
      elementRef.current.requestFullscreen();
    } else if (elementRef.current.mozRequestFullScreen) { // For Firefox
      elementRef.current.mozRequestFullScreen();
    } else if (elementRef.current.webkitRequestFullscreen) { // For Chrome, Safari, and Opera
      elementRef.current.webkitRequestFullscreen();
    } else if (elementRef.current.msRequestFullscreen) { // For IE/Edge
      elementRef.current.msRequestFullscreen();
    }
  };
  const handleExitFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch((err) => {
        console.error(`Error attempting to exit fullscreen mode: ${err.message}`);
      });
    }
  };

  return (<>
     <div ref={elementRef} className="bg-white">
       {
        !isTest&&<Navbar curruser={curruser} setCurruser={setCurruser}/>
       }
      <Routes>
          
        <Route path="/" element={<Home testdata={testdata} startExam={startExam} curruser={curruser} testdetails={testdetails} setDetails={setDetails}/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/login" element={<Login setCurruser={setCurruser}/>}/>
        <Route path="/register" element={<Register setCurruser={setCurruser}/>}/>
        <Route path="/test" element={<Test setisTest={setisTest} exitfull={handleExitFullscreen} fullscreen={handleFullscreen} data={data} setData={setData} curruser={curruser} testdetails={testdetails}/>}/>
        <Route path="/result" element={<Finish data={data} curruser={curruser}/>}/>
        <Route path="/review" element={<Review data={data}/>}/>

      </Routes>
      
        <Footer/>
        </div>
      </> 
  )
}

export default App;
