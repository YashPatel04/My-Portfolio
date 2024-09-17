import React, { useEffect } from 'react';
import './Timeline.css';
import India from '../img/india.png';
import Canada from '../img/canada.png';
import US from '../img/United_States.png';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
gsap.defaults({ease: "none"});

function Timeline() {
  useEffect(() => {
    const pulses = gsap
      .timeline({
        defaults: {
          duration: 0.05,
          autoAlpha: 1,
          scale: 2,
          transformOrigin: "center",
          ease: "power3.out",
          visibility: "visible",
        },
      })
      .to(".ball02, .text01", {}, 0.45)
      .to(".ball03, .text02", {}, 0.55)
      .to(".ball04, .text03", {}, 0.70)

    const main = gsap
      .timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: "#svg",
          scrub: true,
          start: "top center",
          end: "bottom center",
        },
      })
      .set(".ball01", { autoAlpha: 1 }) 
      .to(".ball01", { duration: 0, autoAlpha: 1 })
      .to(
        ".ball01",
        {
          motionPath: {
            path: ".theLine",
            align: ".theLine",
            alignOrigin: [0.5, 0.5],
          },
        },
        0
      )
      .add(pulses, 0);
  }, []);

  return (
    <div> 
      <svg id="svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 600 1200">
        <path class="line01 line" d="M 10 200 600 200" ></path>
        <path class="line02 line" d="M 10 400 600 400" ></path>
        <path class="line03 line" d="M 10 600 600 600" ></path>
        <path class="line04 line" d="M 10 800 600 800" ></path>
        <path class="line05 line" d="M 10 1000 600 1000" ></path>
        <text class="text text01" x="30" y="190">2022</text>
        <text class="text text02" x="30" y="390">2023</text>
        <text class="text text03" x="30" y="590">2024</text>

        <path class="theLine" 
              d="M -5,0
                Q 450 230 300 450 
                T 130 750
                Q 100 850 300 1000
                T 150 1200"
              fill="none" stroke="white" stroke-width="10px" />
        
        <circle class="ball ball01" r="20" cx="50" cy="100"></circle>
        <circle class="ball ball02" r="20" cx="278" cy="201"></circle>
        <circle class="ball ball03" r="20" cx="327" cy="401"></circle>
        <circle class="ball ball04" r="20" cx="203" cy="601"></circle>

      </svg>
    </div>
  );
}

export default Timeline;
