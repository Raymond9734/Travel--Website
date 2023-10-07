import React from 'react'
import './HeroSection.css'
import '../App.css'
import { Button } from './Button';


function HeroSection() {
  return (
    <div className='hero-container'>
       <video src='./videos/video-2.mp4' autoPlay loop muted/>
       <h1>ADVENTURE AWAITS</h1>
       <p>WHAT ARE YOU WAITING FOR</p>
       <div className='hero-btns'>
        <Button className='btns btn-mobile' buttonStyle='btn--outline' buttonSize='btn--large'>
            GET STARTED
        </Button>
        <Button className='btns ' buttonStyle='btn--primary' buttonSize='btn--large'>
            WATCH TRAILER <i class="ri-play-circle-line play-btn"></i>
        </Button>
       </div>
    </div>
  )
}

export default HeroSection