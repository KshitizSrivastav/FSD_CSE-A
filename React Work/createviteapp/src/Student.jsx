import React from 'react'
import './student.css';
function Student({data}) {
  return (
    <div className='idcard'>
      {/* {
        JSON.stringify(data)
      } */}
        <table>
            <tbody>
                <tr style={{backgroundColor:'Red',color: 'cyan'}}><td colSpan={2}>{data.college}</td></tr>
                <tr><td colSpan={2}><img src={data.pic} height={200} width={200}/></td></tr>
                <tr><td>Name:</td><td>{data.name}</td></tr>
                <tr><td>Roll No:</td><td>{data.roll}</td></tr>
                <tr><td>Branch:</td><td>{data.branch}</td></tr>
            </tbody>
        </table>
    </div>
  )
}
// Student.defaultProps={
//   college: "AKG Engineering College"
// }
export default Student