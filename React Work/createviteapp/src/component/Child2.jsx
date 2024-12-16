import React from 'react'
import Child3 from './Child3'
function Child2({child2data}) {
  return (
    // <div>Child2</div>
    <div>

            <Child3 child3data={child2data}></Child3>
    </div>
  )
}

export default Child2