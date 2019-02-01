import React from 'react'
import Description from './Description'
import Discount from './Discount';

const Highlight = () => {
  return (
    <div className="bck_white">
      <div className="highlight_wrapper">
        <Description />
        <Discount/>
      </div>
    </div>

  )
}
export default Highlight;