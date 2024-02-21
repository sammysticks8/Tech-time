import React from 'react';
import Cat1 from '../img/catImg1-.svg';
import Card from '../img/cardProfileImg-.svg';
import Cat2 from '../img/catImg2-.svg';
import Cat3 from '../img/catImg3-.svg';
import Cat4 from '../img/catImg4-.svg';
import Cat5 from '../img/catImg5-.svg';
import Cat6 from '../img/catImg6-.svg';
import Card1 from '../img/cardProfileImg1-.svg';
import Card2 from '../img/cardProfileImg2-.svg';
import Card3 from '../img/cardProfileImg3-.svg';
import Card4 from '../img/cardProfileImg4-.svg';
import Card5 from '../img/cardProfileImg5-.svg';

export default function Intro() {
  return (
    <main>
    <section class='align' id='third'>
    <div className='Learner'>
      <div className='Learn'>
    <img src={Cat1} alt="Learning enviroment" />
    <div className='prop'>
    <button className='Desig'>Design</button> <p className='pro'>4.7k(32.7k+)</p>
    </div>
      <h2 className='uix'>Introduction To User Research In Ux Design</h2>
      <p>23hrs 50mins 15 Lessons</p>
      <div className='Victor'>
      <img src={Card} alt="Card" />
      <p>Leonard Victor $15.00</p>
      </div>

      </div>

      <div className='Learn'>
      <img src={Cat2} alt="Learning enviroment" />
    <div className='prop'>
    <button className='Desig'>Design</button> <p className='pro'>4.7k(32.7k+)</p>
    </div>
      <h2 className='uix'>Introduction To New Marketing Audience</h2>
      <p>23hrs 50mins 15 Lessons</p>
      <div className='Victor'>
      <img src={Card1} alt="Card" />
      <p>Leonard Victor $15.00</p>
      </div>

      </div>

      <div className='Learn'>
    <img src={Cat3} alt="Learning enviroment" />
    <div className='prop'>
    <button className='Desig'>Design</button> <p className='pro'>4.7k(32.7k+)</p>
    </div>
      <h2 className='uix'>Introduction To Html, Css & Bootstrap</h2>
      <p>23hrs 50mins 15 Lessons</p>
      <div className='Victor'>
      <img src={Card2} alt="Card" />
      <p>Leonard Victor $15.00</p>
      </div>

      </div>
    </div>


    <div className='Learner'>
      <div className='Learn'>
    <img src={Cat4} alt="Learning enviroment" />
    <div className='prop'>
    <button className='Desig'>Design</button> <p className='pro'>4.7k(32.7k+)</p>
    </div>
      <h2 className='uix'>Introduction To Javascript, Git & GitHub</h2>
      <p>23hrs 50mins 15 Lessons</p>
      <div className='Victor'>
      <img src={Card3} alt="Card" />
      <p>Leonard Victor $15.00</p>
      </div>

      </div>

      <div className='Learn'>
      <img src={Cat5} alt="Learning enviroment" />
    <div className='prop'>
    <button className='Desig'>Design</button> <p className='pro'>4.7k(32.7k+)</p>
    </div>
      <h2 className='uix'>Introduction To Outroom Marketing Analysis</h2>
      <p>23hrs 50mins 15 Lessons</p>
      <div className='Victor'>
      <img src={Card4} alt="Card" />
      <p>Leonard Victor $15.00</p>
      </div>

      </div>

      <div className='Learn'>
    <img src={Cat6} alt="Learning enviroment" />
    <div className='prop'>
    <button className='Desig'>Design</button> <p className='pro'>4.7k(32.7k+)</p>
    </div>
      <h2 className='uix'>Introduction To Live Marketing Analysis</h2>
      <p>23hrs 50mins 15 Lessons</p>
      <div className='Victor'>
      <img src={Card5} alt="Card" />
      <p>Leonard Victor $15.00</p>
      </div>

      </div>
    </div>
    </section>

<div className='Hello'>
<button className='Explore'>Explore all Courses</button>
<p className='there'>Hello There</p>
</div>
</main>
  )
}