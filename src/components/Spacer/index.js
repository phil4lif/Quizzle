import React from 'react'

const Spacer = ({h, w}) => {
  return (
    <div style={{height: h || 0, width: w || 0}}>

    </div>
  )
}

export default Spacer;