import React from 'react'
import {AboutContainer } from './AboutMeElements.jsx'
import { animated, useSpring } from "react-spring";
import { useScroll } from "react-use-gesture";
import './AboutMe.css'

function AboutMe() {
  const [style, set] = useSpring(() => ({
    transform: "perspective(500px) rotateY(0deg)"
  }));

  const bind = useScroll(event => {
    set({
      transform: `perspective(500px) rotateY(${
        event.scrolling ? event.delta[0] : 0
      }deg)`
    });
  });

  const movies = [
    "/1.jpg",
    "/2.jpeg",
    "/3.webp"
  ]
  return (
    <>
      <AboutContainer>
        <h1 style={{color:"#ffff"}}>About Us</h1>
        <div className="container" {...bind()}>
        {movies.map(src => (
          <animated.div
            key={src}
            className="card"
            style={{
              ...style,
              backgroundImage: `url(${src})`
            }}
          />
        ))}
      </div>
      </AboutContainer>
    </>
  )
}

export default AboutMe