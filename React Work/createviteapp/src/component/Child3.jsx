import React from 'react'
function Child3({child3data}) {
  return (
    <div>Child3
        <div>
        Name: {child3data.name}
        Branch: {child3data.branch}
        Section: {child3data.section}
        </div>
    </div>
  )
}

export default Child3