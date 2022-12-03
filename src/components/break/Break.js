import React from 'react'
import './Break.css'

export default function Break(props) {
  const {action}  = props
  return (
    <div className='break'>
        <h4>Add Break</h4>
        <div className='break-container'>
            <button className='btn-break' onClick={()=>{action(10)}}>10s</button>
            <button className='btn-break'onClick={()=>{action(20)}}>20s</button>
            <button className='btn-break'onClick={()=>{action(30)}}>30s</button>
            <button className='btn-break'onClick={()=>{action(40)}}>40s</button>
            <button className='btn-break'onClick={()=>{action(50)}}>50s</button>
        </div>
    </div>
  )
}
