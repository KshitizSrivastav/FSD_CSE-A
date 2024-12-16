import React, { useContext } from 'react'
import { mycontext } from '../AppContext'

function Child3context() {
    const recievecontext=useContext(mycontext);
  return (
    <div>Child3context
        <div>
            Name:{recievecontext.name}
        </div>
    </div>
  )
}

export default Child3context