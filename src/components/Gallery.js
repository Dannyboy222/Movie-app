import React from 'react';
import './Gallery.css'

class Gallery extends React.Component {

    render() {
        const {image} =this.props;
        console.log(image);
        return(
                <div className='card'>
                    <img src={image.src.medium} alt='Not Found' className='img' />
                </div>
        );
    }
}

export default Gallery;