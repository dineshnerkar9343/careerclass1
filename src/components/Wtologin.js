import React, { useContext } from 'react'
import HaproContext from '../context/HaproContext';
import HaboutContext from '../context/HaboutContext';
import HcourseContext from '../context/HcourseContext';

import { Hapro } from './homecomponents/Hapro';

import { Habout } from './homecomponents/Habout';

import { Hcourse } from './homecomponents/Hcourse';


const Wtologin = () => {
  const context = useContext(HaproContext)
  const acontext = useContext(HaboutContext)
  const mcontext = useContext(HcourseContext)

// const {hapros, setHapros} = context;
// const {habouts, setHabouts} = acontext;
// const {hcourses, setHcourses} = mcontext;


  return (
  <>
  
<Hapro/>
<Habout/>
<Hcourse/>

  </>
  )
}

export default Wtologin