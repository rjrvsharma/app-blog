import React from 'react'
import Sidebar from '../../Components/sidebar/Sidebar'
import Singlepost from '../../Components/singlepost/Singlepost'
import './single.css'

function Single() {
  return (
    <div className='single'>
        <Singlepost/>
      <Sidebar/>
    </div>
  )
}

export default Single
