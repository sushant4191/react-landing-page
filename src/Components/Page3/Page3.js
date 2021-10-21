import React from 'react'
import './Page3.css'
import arrow from './../../images/arrow.png'
import arroww from './../../images/arroww.png'

export default function Page3() {

  const arrowRotate = () => {
    document.getElementById('arr').style.transform = 'rotate(45deg)';
    document.getElementById('arr').src = arrow;
  }
  const arrowRotate2 = () => {
    document.getElementById('arr').style.transform = 'rotate(0deg)';
    document.getElementById('arr').src = arroww;
  }
  return (
    <div className="page3">
      <div className="page3Text">
        <p className="head">Join Our Waitlist</p>
        <p className="sub">Please enter your information and we'll send you an invite once our beta is ready!</p>
      </div>
      <form action="" className="page3Form">
        <label htmlFor="">
          <input type="text" name="" id="" placeholder="Your name"/>
          <i class="fa fa-user" aria-hidden="true" id="test1"></i>
        </label>
        <label htmlFor="">
          <input type="email" name="" id="" placeholder="Your Email" />  
          <i class="fa fa-envelope" aria-hidden="true" id="test1"></i>
        </label>
        <select name="" id="f1">
          <option id="f1" value="" selected>I am a startup founder</option>
        </select>
        <label htmlFor="">
          <input type="text" name="" id="" placeholder="Website or Socials" />
          <i class="fa fa-globe" aria-hidden="true" id="test1"></i>
        </label>
        <button type="submit" className="button" onMouseEnter={arrowRotate} onMouseLeave={arrowRotate2}>Join our waitlist <img src={arroww} alt="" id="arr" /></button>
      </form>
    </div>
  )
}
