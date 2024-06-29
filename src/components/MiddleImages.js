import React from 'react'
import middle from '../assets/middle.jpg'
import Slider from '../components/Slider'


function MiddleImages() {
  return (
    <div style={{
      backgroundImage: `url(${middle})`,
      backgroundSize: '100%',
    }}>
      <div style={{padding:'10rem'}}>
      {/* <button style={{position:'relative', left:'40%', fontSize:'24px', padding:'10px'}}>LOAD MORE</button> */}
      <Slider/>
      </div>
    </div>
  )
}

export default MiddleImages