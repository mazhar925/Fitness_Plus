import React, {useEffect, useState} from 'react'
import './Profile.css'
import Person from '../person/Person'
import Physical from '../physical/Physical'
import Break from '../break/Break'
import Details from '../details/Details'
import { setValue, getValue } from '../fakedb/fakedb'

export default function Profile(props) {
  const [breakVal, setBreakVal] = useState(0);
  useEffect(()=>{
    const time = getValue();
    if(time){
      setBreakVal(time);
    }
  },[])
    const action = (e)=>{
      setBreakVal(e);
      setValue(e);
      
    }
  return (
    <div className='profile'>
      <Person></Person>
      <Physical></Physical>
      <Break action = {action}></Break>
      <Details breakVal = {breakVal} times={props.times}></Details>
    </div>
  )
}
