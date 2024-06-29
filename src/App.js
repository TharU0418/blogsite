import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useRef } from "react";
import bg from './assets/bg.jpg'
import middle from './assets/middle.jpg'
import Latest from "./components/Latest";
import MiddleImages from "./components/MiddleImages";
import LastBlog from "./components/LastBlog";
import Addapost from "./pages/addapost";
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";
import News from "./categories/News";
import Footer from "./components/Footer";
import Blogs from "./pages/Blogs";


function App() {
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

<BrowserRouter>
      <Navbar/>
      {/* <Parallax pages={4} ref={ref}>
      <Latest/> */}
      {/* <ParallaxLayer
       offset={1.6}
       speed={0.1}
       factor={2}

      >
      <MiddleImages /> 

      </ParallaxLayer>  */}

      {/* <ParallaxLayer
       offset={2.5}
       speed={1}
       factor={2}

      >
      <LastBlog /> 

      </ParallaxLayer>  */}

      {/* </Parallax> */}
      
        <div className="content">
          <Routes>
            
          <Route path="/" element={<Home />} />
           <Route path="/addaposttoblog123" element={<Addapost />} />
             <Route path="/blog" element={<BlogPage />} />
             <Route path="/blogs" element={<Blogs />} />
             <Route path="/news" element={<News />} />
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
      </div>
  );
}

export default App;
