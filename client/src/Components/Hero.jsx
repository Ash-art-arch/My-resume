import React from 'react'

const Hero = () => {
  return (
    <div className="hero" data-scroll data-scroll-speed={-3}>
        <img src="/hero_img.png" alt="" />
        <div className="marquee">
          <div className="marqueegroup">  
          <div className="solid"><h1>Hi, i am ashish saikia</h1></div>
          <div className="stroke"><h1>Hi, i am ashish saikia</h1></div>
          </div>
          <div className="marqueegroup">  
          <div className="solid"><h1>Hi, i am ashish saikia</h1></div>
          <div className="stroke"><h1>Hi, i am ashish saikia</h1></div>
          </div>
     
        </div>
      </div>    
  )
}

export default Hero