import React from 'react'
import { Link } from 'react-router-dom'
const Faqnavbar = () => {
  return (
    <div className='flex flex-col bg2 bg-teal-900 '>
    <div className='flex justify-between items-center'>
       <div className='flex items-center'>
       <img className='w-1/2' src='images/logo.png' alt='logo'/>
       <ul className='list-none flex gap-12 text-xl text-white'>
       <li><Link to="/">About</Link></li>
       <li><Link to="/">Stakeholders</Link></li>
       <li><Link to="/FAQ">FAQ</Link></li>
       </ul>
       </div>
       </div>
       <h1 className='font-bold text-6xl text-white text-center'>Frequently Asked Questions</h1>
       </div>
  )
}
export default Faqnavbar