import React from 'react'
import Zooms from '../img/zoom-.svg'
import Stripe from '../img/stripe-.svg'
import Monday from '../img/monday-.svg'
import Drop from '../img/dropbox-.svg'
import Slack from '../img/slack-.svg'

export default function Zoom() {
  return (
    <div className='Stripes'>
      <img className='drip' src={Zooms} alt="Zoom" />
      <img className='drip' src={Stripe} alt="Stripe" />
      <img className='drip' src={Monday} alt="Monday" />
      <img className='drip' src={Drop} alt="Drop Box" />
      <img className='drip' src={Slack} alt="Slack" />
    </div>
  )
}
