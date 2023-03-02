import React from 'react'
import {useNavigate,Link} from 'react-router-dom'
function Welcomepage() {
  const navigate=useNavigate();
  return (
    <>
      <div className='Welcomepage '>
        <div className='flex flex-col'>
            <div className='flex justify-between items-center'>
               <div className='flex items-center '>
               <img className='w-1/2 ml-5' src='images/logo.png' alt='logo'/>
               <ul className='list-none flex gap-28 text-xl text-white font-normal mb-2 ml-16'>
               <li>About</li>
               <li>Services</li>
               <li><Link to="/FAQ">FAQ</Link></li>
               </ul>
               </div>
               <div className='mr-10'>
                   <button className='mr-14 text-xl text-white font-bold border-white border-2 rounded-lg w-24 h-10'>Log in</button>
                   <button className='text-xl text-black font-bold bg-white rounded-lg w-24 h-10'>Sign up</button>
               </div>
            </div>
        </div>
        <div className='w-96 h-fit bg-white mx-auto my-auto rounded-2xl forms pb-10'>
        <h1 className='pt-4 text-green-700 text-4xl font-bold ml-24 pt-6'>WELCOME</h1>
        <h2 className='pt-4 text-xl text-center text-slate-900 font-semibold'>Your account has been created!!</h2>
        <img className='w-auto mx-auto' src='/images/plant 1.png' alt='image not found'/>
        <button  onClick={()=>navigate('/Farmerlandingpage')}className='text-large text-white font-semibold bg-green-700 rounded-lg w-44 h-10 ml-28 mt-5'>Get Started </button>
        </div>    
        </div>
    </>
  )
}
export default Welcomepage