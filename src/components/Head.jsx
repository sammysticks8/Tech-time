import React from 'react'
import logo from '../img/fine girl.svg'
// import logo from '../img/mappedUsers.svg'
import mapped from '../img/mappedUsers.svg'

export default function head() {
  return (
    <section className='first-wrapper' id="first">
      <div className='builders'>
      <h1 className='Grow'>Grow your skills to advance your career path
      </h1>
      <p className='Build'>Build Your Future With Our Quality Education. The Best And Largest All- In-One Online Tutoring Platform In The World</p>
      <div className='Enroll-now'>
      <button className='started'>Get Started Now</button>
      <button className='Enroll'>Enroll Now</button>
      </div>
      <div className='mapped-users'>
      <img className='cents' src={mapped} alt="mapped users" />
      <h2 className='previews'>255k+ <br /><span className='prev'> Previews</span></h2>
      </div>
      </div>
      <div>
      <img className="fine-girl" src={logo} alt="fine girl" />
      </div>
      </section>

    
  )
}