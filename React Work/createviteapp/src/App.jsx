import React from 'react'
import Student from './Student';
import logo from './abeslogo.jpg';
import StudentState from './StudentState';

function App() {
  // let a=12;
  // const mystyle={
  //   backgroundColor:'Red',
  //   color: 'cyan' , 
  //   display: 'flex' ,
  // }     
  //  const studentData=[{
  //   college:"ABES Engineering College",
  //   name:"Rahul",
  //   pic:"https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/car_4.png",
  //   roll:"1234",
  //   branch:"CSE"
  //  },
  //  {
  //   college:"ABES Engineering College",
  //   name:"Rohan",
  //   pic:"https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/car_4.png",
  //   roll:"5678",
  //   branch:"CSE-AIML"
  //  },
  //  {
  //   college:"ABES Engineering College",
  //   name:"Shya",
  //   pic:"https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/car_4.png",
  //   roll:"91011",
  //   branch:"CS"
  //  }
  //  ]

  // return (
  //   <div style={mystyle}>ABES Engineering College
  //   <div style={mystyle}>{a}</div>
  //   <div style={mystyle}>
  //     <Student data={studentData[1]} />
  //     {/* <Student college="ABES Engineering College"
  //     pic={<img src={logo} height={200} width={200} />}
  //     name="Kshitiz" roll="123" branch="CSE"/> */}

  //     {/* <Student //college="ABES Engineering College"
  //     pic={<img src={logo} height={200} width={200} />}
  //     name="Amit" roll="456" branch="CSE-AIML"/> */}
  //   </div>
  //   </div>
  //)
  return (
    <div>
      <StudentState/>
    </div>
  )
}
export default App
