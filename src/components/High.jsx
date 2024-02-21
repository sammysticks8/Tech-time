import React from 'react'
import Hero from '../img/heroImg-.svg'
import Users from '../img/users2-.svg'
import Frame1 from '../img/frame1-.svg'
import Frame2 from '../img/frame2-.svg'
import Frame3 from '../img/frame3-.svg'
import Frame4 from '../img/frame4-.svg'

export default function High() {
  return (
    <section className='High-quality' id='second'>
    <div className=''>
      <h1 className='High'>High quality video, audio & live classes</h1>
     
    <p className='Definition'>High-Definition Video Is Video Of Higher Resolution And Quality Than Standard <br /> Definition. While There’s No Standard Meaning For High Definition, Generally Any <br /> Standard Video Image
    </p>
    <button className='View'>View Courses</button>
    
    <div className='Audio'>
    <div className='Audio-class'>
    <img className='Frame1' src={Frame1} alt="audio" />
    <p>Audio <br /> Classes</p>
    </div>
    <div className='Audio-class'>
    <img className='Frame2' src={Frame2} alt="audio" />
        <p>Live <br /> Classes</p>
    </div>
    </div>

    <div className='Audio'>
    <div className='Audio-class'>
    <img className='Frame3' src={Frame3} alt="audio" />
    <p>Recorded <br /> Classes</p>
    </div>
    <div className='Audio-class'>
    <img className='Frame4' src={Frame4} alt="audio" />
        <p>50+ <br /> Notes</p>
    </div>
    </div>

    </div>
    <div>
        <img className='Hero' src={Hero} alt="Hero" />
        <img className='users' src={Users} alt="users" />
    </div>
    
    </section>
  )
}
