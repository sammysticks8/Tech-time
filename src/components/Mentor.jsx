import React from 'react'
import Little from '../img/heroImg3-.svg'
import Frame5 from '../img/frame5-.svg'
import Frame6 from '../img/frame6-.svg'
import Frame7 from '../img/frame7-.svg'
import Frame8 from '../img/frame8-.svg'

export default function Mentor() {
  return (
    <section className='Mentor'>
    <div className=''>
      <h1 className='Best'>This Is Why We Are Best From Others</h1>
      <p className='Definition'>High-Definition Video Is Video Of Higher Resolution And Quality Than Standard <br /> Definition. While There’s No Standard Meaning For High Definition, Generally Any <br /> Standard Video Image
    </p>
    <img className='Little-Kid' src={Little} alt="Little Kid" />
    </div>
<div>
<div className='Frameup'>
    <div className='Frames'>
    <div className='Fame'>
    <img className='icons' src={Frame5} alt="Frame 5" />
    <h4>Experienced Mentors</h4>
    <p className='resolution'>High-Defination Video Is Video Of Higher Resolution And Quality Than Standard Definition. High-Defination Video Is Video Of Higher Resolution And Quality Than Standard Definition.</p>
    </div>

    <div className='Fame'>
    <img className='icons' src={Frame6} alt="Frame 6" />
    <h4>One-On-One Meetings</h4>
    <p className='resolution'>High-Defination Video Is Video Of Higher Resolution And Quality Than Standard Definition. High-Defination Video Is Video Of Higher Resolution And Quality Than Standard Definition.</p>
    </div>
    </div>
</div>

    <div className='Frames'>
    <div className='Fame'>
    <img className='icons' src={Frame7} alt="Frame 7" />
    <h4>One-On-One Meetings</h4>
    <p className='resolution'>High-Defination Video Is Video Of Higher Resolution And Quality Than Standard Definition. High-Defination Video Is Video Of Higher Resolution And Quality Than Standard Definition.</p>
    </div>

    <div className='Fame'>
    <img className='icons' src={Frame8} alt="Frame 8" />
    <h4>Affordable Prices</h4>
    <p className='resolution'>High-Defination Video Is Video Of Higher Resolution And Quality Than Standard Definition. High-Defination Video Is Video Of Higher Resolution And Quality Than Standard Definition.</p>
    </div>
    </div>
    </div>
    </section>
  )
}
