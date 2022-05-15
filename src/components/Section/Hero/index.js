import React from 'react'
import Video from '../../../assets/HeroVideo.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP } from './HeroElements'
import TypeAnimation from 'react-type-animation'
import { useSpring, animated } from 'react-spring'


const Hero = () => {

  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })

  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1> 
           Hello World !
        </HeroH1>
        <HeroH1> 
            I'm <font style={{color: "#FFBF00"}}>Ikmal Shahzan </font> <animated.div style={props}>👨‍💻</animated.div>
        </HeroH1>
        <HeroP>
        <TypeAnimation
        cursor={true}
        sequence={[
          'A self-taught software developer who enjoy write code and build something amazing.',
          2000,
        ]}
        wrapper="a"
       />
        </HeroP>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero