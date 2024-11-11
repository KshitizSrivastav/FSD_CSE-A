import React from 'react'
import Student from './Student';

function App() {
  let a=12;
  const mystyle={
    backgroundColor:'Red',
    color: 'cyan'
  }           
  return (
    <div style={mystyle}>ABES Engineering College
    <div style={mystyle}>{a}</div>
    <div>
      <Student college="ABES Engineering College" name="Kshitiz" roll="123" branch="CSE"/>
    </div>
    </div>
  )
}
export default App
