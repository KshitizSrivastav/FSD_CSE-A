import React, { createContext } from 'react'
import Child1context from './componentcontext/Child1context';
import Child2context from './componentcontext/Child2context';
import Child3context from './componentcontext/Child3context';
const mycontext=createContext();
function AppContext() {
    const data={
        name:"Kshitiz",
        branch:"CSE",
        section:"A"
    }
  return (
    <div>AppContext
        <mycontext.Provider value={data}>
            {/* <Child1context />
            <Child2context /> */}
            <Child3context />
        </mycontext.Provider>
    </div>
  )
}
export {
    mycontext
}
export default AppContext