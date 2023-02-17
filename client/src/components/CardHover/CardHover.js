import React from 'react'
// import logo from '../../assets/cocacola_logo.png'
// import bottle from '../../assets/cocacola.png'
import './CardHover.css'

// Cocacola
const CardHover = (props) => {
    return (
        <div className='main'>
            <div className="card">
                <div className="circle" id="logo">
                    <img src={props.img} alt="logo" className='logo'/>
                </div>
                <div className='content'>
                    <div className='name text-xl'>{props.heading}</div>
                    <div>
                        <div className='desc'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus vero repudiandae fuga quae eum ad voluptates nulla, tempore in odit iure assumenda enim deleniti soluta. Impedit veniam nemo porro qui!</div>
                    </div>
                    <a href="#">Explore More</a>
                </div>
                <img src={props.img} alt="Bottle" className='bottle' />
            </div>
        </div>
    )
}

export default CardHover