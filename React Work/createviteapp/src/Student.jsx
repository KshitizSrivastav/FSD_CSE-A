import React from 'react'
import './student.css';
function Student(props) {
  return (
    <div className='idcard'>
        <table>
            <tbody>
                <tr style={{backgroundColor:'Red',color: 'cyan'}}><td colSpan={2}>{props.college}</td></tr>
                <tr><td>Name:</td><td>{props.name}</td></tr>
                <tr><td>Roll No:</td><td>{props.roll}</td></tr>
                <tr><td>Branch:</td><td>{props.branch}</td></tr>
            </tbody>
        </table>
    </div>
  )
}

export default Student