import React, { useState } from 'react'
import cat from './download.jpg'
function ImageManipulation() {
    const [height,setHeight]=useState(100);
    function increaseHeight(){
        setHeight(height+10);
    }
    const [width,setWidth]=useState(100);
    function increaseWidth(){
        setWidth(width+20);
    }
    const [red,setRed]=useState(0);
    const [green,setGreen]=useState(0);
    const [blue,setBlue]=useState(0);
    function colorChange(){
        setRed(Math.random()*255);
        setGreen(Math.random()*255);
        setBlue(Math.random()*255);
    }

    const [imgrotate,setimgrotate]=useState(0);
    function dorotate(){
        setimgrotate(imgrotate+30)
    }
  return (
    <div style={{height:'500px' , width:'500px' , border: '2px solid red' , margin:'100px' , backgroundColor:`RGB(${red},${green},${blue})`}}>
        <div style={{margin: '180px' }}>
            <img src={cat} height={height} width={width}  />
            <div style={{margin:'70px'}}>
            <button onClick={increaseHeight}>EnhanceHeight</button>
            <button onClick={increaseWidth}>EnhanceWidth</button>
            <button onClick={dorotate}>RotateImage</button>
            <button onClick={colorChange}>BackgoundColor</button>
        </div>
        </div>
    </div>
  )
}

export default ImageManipulation