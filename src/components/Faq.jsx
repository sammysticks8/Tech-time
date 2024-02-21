import React from 'react'
import { useState } from 'react'
// import '../css.style/Open.css'

const Faq = () => {
  const [openText, setOpenText] = useState(null); 
  const [activeId, setActiveId] = useState(null);

  const toggleVisibility = (id) => {
    if (openText === id) {
      setOpenText(null);
      setActiveId(null);
    } else {
      setOpenText(id);
      setActiveId(id);
    }
  };
  const openData = [
      {
        id: 1,
        question: "Is There A Free Trial Available?",
        answer:
          "High-Defination Video Is Video Of Higher Resolution And Quality Than Standard Definition. High-Defination Video Is Video Of Higher Resolution And Quality Than Standard Definition. Hbuild Your Future With Our Quality Education. The Best And Largest All-In-One Online Tutoring Platform In The Worldd Definition.",
      },
      {
        id: 2,
        question: "Can I Change My Plan Later?",
        answer: "High-Defination Video Is Video Of Higher Resolution And Quality Than Standard Definition. High-Defination Video Is Video Of Higher Resolution And Quality Than Standard Definition. Hbuild Your Future With Our Quality Education. The Best And Largest All-In-One Online Tutoring Platform In The Worldd Definition.",
      },
      {
        id: 3,
        question: "Are The Courses Lifetime?",
        answer: "High-Defination Video Is Video Of Higher Resolution And Quality Than Standard Definition. High-Defination Video Is Video Of Higher Resolution And Quality Than Standard Definition. Hbuild Your Future With Our Quality Education. The Best And Largest All-In-One Online Tutoring Platform In The Worldd Definition.",
      },
      {
        id: 4,
        question: "Do I Get Certified After Taking Courses?",
        answer: "High-Defination Video Is Video Of Higher Resolution And Quality Than Standard Definition. High-Defination Video Is Video Of Higher Resolution And Quality Than Standard Definition. Hbuild Your Future With Our Quality Education. The Best And Largest All-In-One Online Tutoring Platform In The Worldd Definition.",
      },
      {
        id: 5,
        question: "How Do I Reach Out To Mentors?",
        answer: "High-Defination Video Is Video Of Higher Resolution And Quality Than Standard Definition. High-Defination Video Is Video Of Higher Resolution And Quality Than Standard Definition. Hbuild Your Future With Our Quality Education. The Best And Largest All-In-One Online Tutoring Platform In The Worldd Definition.",
      },
      {
        id: 6,
        question: "Do We Get Job Ready After Taking Courses?",
        answer: "High-Defination Video Is Video Of Higher Resolution And Quality Than Standard Definition. High-Defination Video Is Video Of Higher Resolution And Quality Than Standard Definition. Hbuild Your Future With Our Quality Education. The Best And Largest All-In-One Online Tutoring Platform In The Worldd Definition.",
      },
      
    ];
    return (

      <section className='Facts'>
         
      <div className='question'>
        <h1 className='Browser'>Frequently Asked Questions</h1>
        <p className='Define'>High-Defination Video Is Video Of Higher Resolution And Quality Than <br /> Standard Definition. While There’s No Standard Meaning For High <br />Definition, Generally Any Standard Video Image</p>
     </div>

      <div className="opent">
        {openData.map((open) => (
          <div
            className={`openItem ${activeId === open.id ? 'active' : ''}`}
            key={open.id}
          >
            <div className="questions3" onClick={() => toggleVisibility(open.id)}>
              {open.question}
            </div>
            {openText === open.id && <div className="answer">{open.answer}</div>}
          </div>
        ))}
      </div>
      </section>
    );
}

export default Faq






// import React from 'react'
// import Add from "../img/add-.svg"

// export default function Faq() {
//   return (
//     <section className='Facts'>
     
//     <div className='question'>
//       <h1 className='Browser'>Frequently Asked Questions</h1>
//       <p className='Define'>High-Defination Video Is Video Of Higher Resolution And Quality Than <br /> Standard Definition. While There’s No Standard Meaning For High <br />Definition, Generally Any Standard Video Image</p>
//     </div>


//     <div className='Trial'>
//         <div><h2 className='Avail'>Is There A Free Trial Available?</h2></div>
//         <div><img className='plus' src={Add} alt="Plus" /></div>
       
//     </div>
//     <hr />
   

//     <div className='can'>
//         <div><h2 className='Avail'>Can I Change My Plan Later?</h2></div>
//         <div><img className='plus' src={Add} alt="Plus" /></div>
//     </div>
//     <hr />

//     <div className='life'>
//         <div><h2 className='Avail'>Are The Courses Lifetime?</h2></div>
//         <div><img className='plus' src={Add} alt="Plus" /></div>
//     </div>
//     <hr />

//     <div className='cert'>
//         <div><h2 className='Avail'>Do I Get Certified After Taking Courses?</h2></div>
//         <div><img className='plus' src={Add} alt="Plus" /></div>
//     </div>
//     <hr />

//     <div className='Reah'>
//         <div><h2 className='Avail'>How Do I Reach Out To Mentors?</h2></div>
//         <div><img className='plus' src={Add} alt="Plus" /></div>
//     </div>
//     <hr />

//     <div className='kin'>
//         <div><h2 className='Avail'>Do We Get Job Ready After Taking Courses?</h2></div>
//         <div><img className='plus' src={Add} alt="Plus" /></div>
//     </div>
//     <hr />

//     </section>
   
//   )
// }
