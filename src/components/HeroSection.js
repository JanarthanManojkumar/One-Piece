import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'

export const HeroSection = () => {
  return (
   <div className="hero-container">
    <video src="videos\video-1.mp4" autoPlay loop muted></video>
    <h1>ONE PIECE</h1>
    <p>Power isn't determined by your size, but by the size of your heart and dreams</p>
    <div className="hero-btn">
        <Button className='btn' 
        buttonStyle={'btn--outline'} 
        buttonSize={'btn--large'}>GET STARTED</Button>

       <Button className='btn' 
        buttonStyle={'btn--primary'} 
        buttonSize={'btn--large'}>WATCH TRAILER
           <FontAwesomeIcon icon={faPlayCircle} className='faPlayCircle'/>
       </Button>
    </div>
   </div>
  )
}
