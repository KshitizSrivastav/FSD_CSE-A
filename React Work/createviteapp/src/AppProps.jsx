import React from 'react'
import Child1 from './component/Child1'
import Child2 from './component/Child2'
import Child3 from './component/Child3'
function AppProps() {
    const data={
        name: "Kshitiz",
        branch: "CSE" ,
        section: "A"
    }
  return (
    <div>AppProps
        <div>
            <Child1 childdata={data}/>
        </div>
    </div>
  )
}

export default AppProps