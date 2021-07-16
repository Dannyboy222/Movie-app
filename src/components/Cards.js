import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

export default function Cards() {
    return(
        <div className='cards'>
            <h1>Check out these EPIC Cat Pictures!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                        src='images/img-1.jpg'
                        text=' Lorem ipsum dolor sit amet, consectetur a.'
                        path='/photos' 
                        label='Nana'/>
                        <CardItem 
                        src='images/img-2.jpg'
                        text=' Lorem ipsum dolor sit amet, consectetur a.'
                        path='/photos' 
                        label='Lucas'/>
                        <CardItem 
                        src='images/img-3.jpg'
                        text=' Lorem ipsum dolor sit amet, consectetur a.'
                        path='/photos' 
                        label='Google'/>
                        <CardItem 
                        src='images/img-4.jpg'
                        text=' Lorem ipsum dolor sit amet, consectetur a.'
                        path='/photos' 
                        label='Manon'/>
                        <CardItem 
                        src='images/img-5.jpg'
                        text=' Lorem ipsum dolor sit amet, consectetur a.'
                        path='/photos' 
                        label='Missy'/>
                        <CardItem 
                        src='images/img-6.jpg'
                        text=' Lorem ipsum dolor sit amet, consectetur a.'
                        path='/photos' 
                        label='Rupert'/>
                        <CardItem 
                        src='images/img-7.jpg'
                        text=' Lorem ipsum dolor sit amet, consectetur a.'
                        path='/photos' 
                        label='Momo'/>
                        
                    </ul>
                </div>
            </div>
        </div>
    );

}