// import React from 'react'
// import Student from './Student';
// import logo from './abeslogo.jpg';
// import StudentState from './StudentState';
// import ImageManipulation from './ImageManipulation';

// function App() {
//   // let a=12;
//   // const mystyle={
//   //   backgroundColor:'Red',
//   //   color: 'cyan' , 
//   //   display: 'flex' ,
//   // }     
//   //  const studentData=[{
//   //   college:"ABES Engineering College",
//   //   name:"Rahul",
//   //   pic:"https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/car_4.png",
//   //   roll:"1234",
//   //   branch:"CSE"
//   //  },
//   //  {
//   //   college:"ABES Engineering College",
//   //   name:"Rohan",
//   //   pic:"https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/car_4.png",
//   //   roll:"5678",
//   //   branch:"CSE-AIML"
//   //  },
//   //  {
//   //   college:"ABES Engineering College",
//   //   name:"Shya",
//   //   pic:"https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/car_4.png",
//   //   roll:"91011",
//   //   branch:"CS"
//   //  }
//   //  ]

//   // return (
//   //   <div style={mystyle}>ABES Engineering College
//   //   <div style={mystyle}>{a}</div>
//   //   <div style={mystyle}>
//   //     <Student data={studentData[1]} />
//   //     {/* <Student college="ABES Engineering College"
//   //     pic={<img src={logo} height={200} width={200} />}
//   //     name="Kshitiz" roll="123" branch="CSE"/> */}

//   //     {/* <Student //college="ABES Engineering College"
//   //     pic={<img src={logo} height={200} width={200} />}
//   //     name="Amit" roll="456" branch="CSE-AIML"/> */}
//   //   </div>
//   //   </div>
//   //)
//   return (
//     <div>
//       <ImageManipulation/>
//     </div>
//   )
// }
// export default App
// import React from "react";
// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Registration from "./Registration";
import MainLayout from "./MainLayout";
// import StudentState from "./StudentState";
// import ImageManipulation from "./ImageManipulation";

function App() {
  // const[regData,setRegData] = useState();

  return (
    // <div style={{display:"flex"}}> 
      // {/* <ImageManipulation/> */}
    
    // <div style={{display:"flex", flexDirection:"column", marginLeft:"40px", gap:"40px"}}>
    //   <div>{JSON.stringify(regData)}</div>
    //   <Login loginData={regData}/>
    //   <h3>Registration Form</h3>
    //   <Registration registrationData={setRegData}/>
    // </div>

    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
          <Route path="/login" element={<Login />}/>
          <Route path="/registration" element={<Registration />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;