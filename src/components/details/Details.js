import React from 'react'
import App from '../toast/Toast'
import './Details.css'


export default function Details(pros) {
  return (
    <div className='details'>
        <h3>Exercise Details</h3>
        <div className='common-style'>Total Time: {pros.times}</div>
        <div className='common-style'>Break Time: {pros.breakVal}</div>
        <div className='btn-container'>
        <App/>
        <a href="faq.html">FAQ</a>
        </div>
    </div>
  )
}
