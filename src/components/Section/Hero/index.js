import React from 'react'
import Video from '../../../assets/HeroVideo.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP } from './HeroElements'

const Hero = () => {
  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1> Just a cool React Portfolio Website</HeroH1>
        <HeroP>Just to learn react with styled components </HeroP>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero