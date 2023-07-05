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

        {/* <ParallaxLayer offset={0} speed={0.5}>
          <img src={url('stars')} style={{ width: '15%', marginLeft: '70%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={1.3} speed={-0.1}>
          <img src={url('cloud')} style={{ width: '20%', marginLeft: '55%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.8}>
          <img src={url('cloud')} style={{ width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={1.75} speed={0.5}>
          <img src={url('cloud')} style={{ width: '20%', marginLeft: '70%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={2.6} speed={0.4}>
          <img src={url('cloud')} style={{ width: '20%', marginLeft: '70%' }} />
        </ParallaxLayer> */}
      </Parallax>
          
    </div>
  )
}

export default ParallaxEffect