import React from 'react'
import './conditional.css'

const Conditional = ({ active, headerTrue, text }) => {
  if (active) {
    return (
      <div className="conditional">
        {headerTrue ? <h1>ragaca</h1> : <p>ragaca</p>}
        {text && (
          <span>{text}</span>
        )}
      </div>
    )
  }

  return <div>not Active</div>
}

export default Conditional
