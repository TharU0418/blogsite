import React, { useRef } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import MiddleImages from "../components/MiddleImages";
import LastBlog from "../components/LastBlog";
import Addapost from "../pages/addapost";
import Latest from "../components/Latest";


function Home2() {
    const ref = useRef()

  return (
      
    <div>

    {/* <Parallax pages={2} ref={ref}> */}
      {/* <ParallaxLayer
        offset={0}
        speed={1}
        factor={2}
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
        }}
      /> */}

        {/* <ParallaxLayer
          sticky={{start:0.8, end:2.5}}
          style={{textAlign:'center'}}
        >
            <img src={pen}/>
        </ParallaxLayer> */}

    {/* </Parallax> */}

      <Parallax pages={4} ref={ref}>
      <Latest/>
      <ParallaxLayer
       offset={1.6}
       speed={0.1}
       factor={2}
      //  style={{
      //   backgroundImage: `url(${middle})`,
      //   backgroundSize: '100%',
      // }}
      >
      <MiddleImages /> 

      </ParallaxLayer> 

      <ParallaxLayer
       offset={2.5}
       speed={1}
       factor={2}
      //  style={{
      //   backgroundImage: `url(${middle})`,
      //   backgroundSize: '100%',
      // }}
      >
      <LastBlog /> 

      </ParallaxLayer> 

      </Parallax>
   
      </div>
  )
}

export default Home2