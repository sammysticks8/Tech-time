import React from 'react'
import Community from "../img/community-.svg"

export default function Connect() {
  return (
    <section className='Commute' id='fifth'>
    <div className='Community'>
      <p className='Techstars'>Join Our Community</p>
      <h1 className='Browser conn'>Are You Ready To Connect With <br />The Future Talent Of The Tech <br />World</h1>
      <p className='Techstars'>Meet Up With Other Techstars And Grow Together</p>
    </div>

    <div className='persons'>
    <div className='diap'>
    <div><img className='people' src={Community} alt="community" />
    </div><div className="there">Hello there</div>
    </div>
    <div className='diap'>
    <div><button className='join'>Join Our Community</button><div className="there">Hello there</div></div>
    </div>
    </div>
    </section>
  )
}
