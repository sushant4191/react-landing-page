import React from 'react'
import './Page1.css'
import Page1Img from './../../images/page1.jpeg'
import arrow from './../../images/arrow.png'
import arroww from './../../images/arroww.png'
import { Link } from "react-router-dom";


export default function Page1() {


  const arrowRotate = () => {
    document.getElementById('arr').style.transform = 'rotate(45deg)';
    document.getElementById('arr').src = arroww;
  }
  const arrowRotate2 = () => {
    document.getElementById('arr').style.transform = 'rotate(0deg)';
    document.getElementById('arr').src = arrow;
  }

  return (
    <div className="page1">
      <div className="page1Text">
        <p className="head">We manufactured opportuinity</p>
        <p className="subHead">Goblaq is modernizing the way black people to gain access to opportuinity and resources</p>
       <Link to='/features' style={{textDecoration:"none"}} > 
       <button type="submit" className="button"
        onMouseEnter={arrowRotate} onMouseLeave={arrowRotate2}>Join our waitlist <img src={arrow} alt="" id="arr" />
        </button> 
        </Link>
      </div>
      <div className="page1Img">
        <img src={Page1Img} alt="" srcset="" />
      </div>
    </div>
  )
}
