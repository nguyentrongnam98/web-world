import React from 'react';
import Button from './Button';
import './HeroSection.css';
import '../App.css';
const HeroSection = () => {
    return (
        <div className="hero-container">
            <video src = '/videos/video-2.mp4' autoPlay loop muted/>
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for ?</p>
            <div className = "hero-btns">
                <Button className='btn' buttonSTyle = 'btn--outline' buttonSize='btn--lagre'>
                    Get Started
                </Button>
                <Button className='btn' buttonSTyle = 'btn--primary' buttonSize='btn--lagre'>
                    WATCH TRAINER <i className="far fa-play-circle"/>
                </Button>
            </div>
        </div>
    );
};

export default HeroSection;