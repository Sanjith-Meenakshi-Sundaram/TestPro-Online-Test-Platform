import { useState, useRef, useEffect } from "react"
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
import Profile from "./pages/Profile"
import Landing from "./pages/Landing"
import ManageTest from "./pages/ManageTest"
import ManageUser from "./pages/ManageUser"
import CreateTest from "./pages/CreateTest"
import Error from "./pages/Error"
import isTokenExpired from "./utils/isTokenExpired"

function App() {

    const [data,setData]=useState([...testdata[0].questions]);
    const [isLogedIn,setisLogedIn]=useState(false);
    const navigate=useNavigate();
    const [testdetails,setDetails]=useState({
      ques:0,
      time:0,
      category: "Tech",
      title:""
    });
    const [isTest,setisTest]=useState(false);

    const startExam=(index)=>{
      setData([...testdata[index-1].questions]);
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
         !isTest&&<Navbar isLogedIn={isLogedIn} setisLogedIn={setisLogedIn}/>
       }
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/profile" element={<Profile testdata={testdata} startExam={startExam} testdetails={testdetails} setDetails={setDetails}/>}/>
        <Route path="/home" element={<Home testdata={testdata} startExam={startExam} testdetails={testdetails} setDetails={setDetails}/>}/>
        <Route path="/admin" element={<Admin/>}>
              <Route path="" element={<ManageTest/>}/>
              <Route path="users" element={<ManageUser/>}/>
              <Route path="tests" element={<ManageTest/>}/>
              <Route path="create" element={<CreateTest/>}/>

        </Route>
        <Route path="/login" element={<Login setisLogedIn={setisLogedIn}/>}/>
        <Route path="/register" element={<Register setisLogedIn={setisLogedIn}/>}/>
        <Route path="/test" element={<Test setisTest={setisTest} exitfull={handleExitFullscreen} fullscreen={handleFullscreen} data={data} setData={setData} testdetails={testdetails}/>}/>
        <Route path="/result" element={<Finish data={data}/>}/>
        <Route path="/review" element={<Review data={data}/>}/>
        <Route path="*" element={<Error code="404" msg="Page Not Found"/>}/>

      </Routes>
      
      {
       !isTest&&<Footer/>
       }
        </div>
      </> 
  )
}

export default App;
