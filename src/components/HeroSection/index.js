import React from 'react'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight, HeroCode,Button } from './HeroElements'
import Video from '../../Videos/video.mp4';
import { useState } from 'react';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);

    }



    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>

            <HeroContent>

                <HeroH1>
                    Hello, I'm a Web Developer
                </HeroH1>
                <HeroP style={{ textAlign: 'center' }} >
                    "Code is like poetry; elegant, efficient, and capable of bringing ideas to life."

                </HeroP>
                <HeroBtnWrapper>
                    <Button onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'  
                    to='contact'
                    smooth={true}
                    durtation={500}
                    spy={true}
                    exact="true"
                    offset={-80}

                    >
                        Hire Me {(hover) ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>




            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection