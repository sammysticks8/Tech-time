import React from 'react'
import Tech from "../img/tech time.svg"

export default function Footer() {
  return (
    <footer>
    <div>
      <img src={Tech} alt="Tech Time" />
      <p className='social'>Reach Out To Us On Any Of Our Social <br /> Media Networks</p>
    </div>

    <div><h2>Useful Links</h2>
    <ol className='Testimonials'>
        <li><a href="#first">Home</a></li>
        <li>About Us</li>
        <li>Our Courses</li>
        <li>Testimonials</li>
        <li>Our Community</li>
    </ol>
    </div>

    <div><h2>Community</h2>
    <ol>
        <li><a href="">Help Centers</a></li>
        <li>Partners</li>
        <li>Suggestion</li>
        <li>Blog</li>
        <li>News Letter</li>
    </ol>
    </div>

    <div><h2>Subscribe us</h2></div>
    </footer>
  )
}
