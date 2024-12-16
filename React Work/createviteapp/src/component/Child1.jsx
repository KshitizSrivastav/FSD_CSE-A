import React from 'react'
import Child2 from './Child2'
function Child1({childdata}) {
  return (
    <div>Child2 
        <div>
        <Child2 child2data={childdata}/>
        </div>
    
</div>
  )
}

export default Child1