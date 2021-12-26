import React from 'react'
import './TrainingStyles.css'

import {Link} from 'react-router-dom'

import Pod from '../assets/pod.jpg'
import Moon from '../assets/moon.jpg'

const Training = () => {
    return (
        <div className='training'>
            <div className='left'>
                <h1>Training</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                   Nunc vestibulum non sapien a posuere. Sed sodales posuere
                   mi ut suscipit. Ut vel arcu iaculis, porta ligula eget,
                   vulputate odio. Integer imperdiet tortor tellus, ac
                   sollicitudin eros venenatis ornare.</p>
                <Link to='/contact'><button className='btn'>Contact</button></Link>
            </div>
            <div className='right'>
                <div className='img-container'>
                    <div className='image-stack top'>
                        <img src={Moon} className='img' alt='Moon image'/>
                    </div>
                    <div className='image-stack bottom'>
                        <img src={Pod} className='img' alt='Pod image'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Training

