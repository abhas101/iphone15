import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { heroVideo, smallHeroVideo } from '../utils'
import { useState, useEffect } from 'react'

const Hero = () => {

  // iphone text animation

  useGSAP(() => {
    gsap.to('#heroTitle', {
      opacity: 1,
      delay: 2,
      duration: 1,
    })


    gsap.to('#cta',{
      opacity:1,
      y:-20,
      duration:1,
      delay:2,
      

    })
  })


  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo)
    }
    else {
      setVideoSrc(heroVideo)
    }
  }

  useEffect(() => {

    window.addEventListener('resize', handleVideoSrcSet)
    return () => {
      window.removeEventListener('resize', handleVideoSrcSet)
    }

  }, [])



  return (
    <section className='w-full nav-height bg-black relative '>
      {/* iphone text */}
      <div className='h-5/6 w-full flex-center flex-col'>
        <p className='hero-title' id='heroTitle'>iphone 15</p>

        {/* video */}

        <div className='md:w-10/12 w-9/12'>
          <video autoplay="muted" playsInline={true} key={videoSrc} className='pointer-events-none'>
            <source src={videoSrc} type="video/mp4" />
          </video>


        </div>
      </div>


      <div id='cta' className='flex flex-col items-center opacity-0 translate-y-20'>
        <a href="#heighlights" className='btn'>Buy Now</a>
        <p className='font-normal text-xl'>From $199/month or $999</p>

      </div>



      {/* hero videos */}




    </section>
  )
}

export default Hero