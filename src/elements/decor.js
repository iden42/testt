import React from 'react'
import cloud from '../img/cloud.png'
import pinkface from '../img/pinkface.png'
import yellowface from '../img/yellowface1.png'
import yellowface1 from '../img/yellowface2.png'
import sun from '../img/Ellipse.png'


export default function Decor() {
  return (
    <div>
        <img className='cloud' id='cloudA' src={cloud} alt=""></img>
        <img className='cloud' id='cloudB' src={cloud} alt=""></img>
        <img className='cloud' id='cloudC' src={cloud} alt=""></img>
        <img className='cloud' id='cloudD' src={cloud} alt=""></img>
        <img className='cloud' id='cloudE' src={cloud} alt=""></img>
        <img className='cloud' id='cloudF' src={cloud} alt=""></img>
        <img className='cloud' id='cloudG' src={cloud} alt=""></img>
        <img className='cloud' id='cloudH' src={cloud} alt=""></img>

        <img id='pink' src={pinkface} alt=""></img>
        <img id='pink1' src={pinkface} alt=""></img>
        <img id='yellow1' src={yellowface} alt=""></img>
        <img id='yellow2' src={yellowface} alt=""></img>
        <img id='yellow3' src={yellowface1} alt=""></img>
        <img id='sun' src={sun} alt=""></img>
    </div>
  )
}
