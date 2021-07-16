import React from 'react';
import '../App.css';
import './HeroSection.css';
import { Button } from './Button';


export default function HeroSection() {
    return(
        <div className='hero-container'>
            <h1> FIND MORE CAT PICTURES</h1>
            <p>What are you waiting for ?</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Get STARTED</Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>WATCH CAT ViDEOS<i className='far fa-play-circle'/> </Button>
            </div>
        </div>
    );

}