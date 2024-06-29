import React, { useEffect, useRef, useState } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import MiddleImages from "../components/MiddleImages";
import LastBlog from "../components/LastBlog";
import Addapost from "../pages/addapost";
import Latest from "../components/Latest";


function Home() {
    const ref = useRef()

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Update isVisible state based on whether the target element intersects with the viewport
                setIsVisible(entry.isIntersecting);
            },
            {
                // You can adjust the root margin based on your UI requirements
                rootMargin: '0px',
                threshold: 0.5, // Define the threshold for intersection (0.5 means when 50% of the element is visible)
            }
        );

        if (ref.current) {
            observer.observe(ref.current); // Start observing the target element
        }

        // Cleanup function to disconnect the observer when the component unmounts
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

  return (
      
    <div>

      <Latest/>
    

    {/* Apply a class conditionally based on showMiddleImages state */}
    <div ref={ref} className={`fade-container ${isVisible ? 'show' : ''}`}>
                <MiddleImages />
            </div>
      <LastBlog /> 


   
      </div>
  )
}

export default Home