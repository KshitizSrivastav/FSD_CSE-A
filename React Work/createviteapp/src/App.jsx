import React from 'react'
import Student from './Student';
import logo from './abeslogo.jpg';

function App() {
  let a=12;
  const mystyle={
    backgroundColor:'Red',
    color: 'cyan' , 
    display: 'flex' ,
  }           
  return (
    <div style={mystyle}>ABES Engineering College
    <div style={mystyle}>{a}</div>
    <div style={mystyle}>
      <Student college="ABES Engineering College"
      pic={<img src={logo} height={200} width={200} />}
      name="Kshitiz" roll="123" branch="CSE"/>

      <Student college="ABES Engineering College"
      pic={<img src={logo} height={200} width={200} />}
      name="Amit" roll="456" branch="CSE-AIML"/>

     <Student college="ABES Engineering College"
      pic={<img src={logo} height={200} width={200} />}
      name="Arun" roll="789" branch="CS"/>
    </div>
    </div>
  )
}
export default App
