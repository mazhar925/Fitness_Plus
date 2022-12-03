import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import './Person.css'

export default function Person() {
  return (
    <div className='person'>
       <div className='avatar'>
       <FontAwesomeIcon icon={faCircleUser} />
       </div>
        <div className='person-info'>
        <h3 >Zahid Hossain</h3>
        <p>Sydney, Australia</p>
        </div>
    </div>
  )
}
