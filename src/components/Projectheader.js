import React,{useRef,useEffect} from 'react'
import './Projectheader.css'
import { gsap } from 'gsap';
import './Projectheader.css';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Projectheader() {
  const headerRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    const children = header.querySelectorAll('.header-child');
    const totalScrollWidth = header.scrollWidth - header.clientWidth;

    gsap.to(children, {
      x: () => -totalScrollWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: header,
        start: 'bottom top',
        end: () => `+=${totalScrollWidth}`,
        scrub: true,
        pin: false,
        anticipatePin: 1,
      },
    });
  }, []);

  return (
    <div ref={headerRef} className='Projects-header'>
          <h1 className='header-child'> · </h1>
          <h1 className='header-child'> My Projects </h1>
          <h1 className='header-child'> · </h1>
          <h1 className='header-child'> My Projects </h1>
          <h1 className='header-child'> · </h1>
          <h1 className='header-child'> My Projects </h1>
          <h1 className='header-child'> · </h1>
          <h1 className='header-child'> My Projects </h1>
          <h1 className='header-child'> · </h1>
          <h1 className='header-child'> My Projects </h1>
          <h1 className='header-child'> · </h1>
          <h1 className='header-child'> My Projects </h1>
          <h1 className='header-child'> · </h1>
          <h1 className='header-child'> My Projects </h1>
          <h1 className='header-child'> · </h1>
          <h1 className='header-child'> My Projects </h1>
          <h1 className='header-child'> · </h1>
          <h1 className='header-child'> My Projects </h1>
          <h1 className='header-child'> · </h1>
          <h1 className='header-child'> My Projects </h1>
          <h1 className='header-child'> · </h1>
          <h1 className='header-child'> My Projects </h1>
          <h1 className='header-child'> · </h1>
          <h1 className='header-child'> My Projects </h1>
          <h1 className='header-child'> · </h1>
          <h1 className='header-child'> My Projects </h1>
          <h1 className='header-child'> · </h1>
      </div>
  )
}

export default Projectheader
