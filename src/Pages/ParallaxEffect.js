import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
// import { useSpring, animated } from 'react-spring'


const ParallaxEffect = () => {
  return (
    <div>
      <Parallax pages={4}>
        <ParallaxLayer  >
          <h2 className='text-4xl font-semibold text-center '>Parallax Effect</h2>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1}>
          <h2 className='text-4xl font-semibold text-center '>Web Development</h2>
        </ParallaxLayer>

       
      </Parallax>
          
    </div>
  )
}

export default ParallaxEffect