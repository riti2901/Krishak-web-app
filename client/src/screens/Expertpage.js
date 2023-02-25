import React from 'react'
import {BiUserCircle} from 'react-icons/bi';
import Card1 from '../Cards/Card1';
import Card2 from '../Cards/Card2';
import {Link, useNavigate} from 'react-router-dom';
function Expertpage(){
  const navigate=useNavigate();
  return (
       <>
        <div className='flex flex-col'>
            <div className='flex justify-between items-center'>
               <div className='flex items-center '>
               <img className='w-1/2 ml-5' src='images/logo1.png' alt='logo'/>
               <ul className='list-none flex gap-28 text-xl text-black font-semibold mb-2 ml-16'>
               <li>About</li>
               <li><Link to="/">Home</Link></li>
               <li><Link to="/Expertpage">Guidance</Link></li>
               </ul>
               </div>
               <BiUserCircle className='fill-black text-7xl pr-7' />
            </div>
        </div>
        <div className=' flex justify-between items-center '>
        <div className='text-6xl font-black ml-20 leading-tight'>
        <h1>Growing</h1>
        <h1>Success with</h1>
        <h1>Expert Advice</h1>
        <h1>for Farmers</h1>
        </div>
        <div>
        <img src='images/expertsPic.png' alt='expertpic' className='h-96'/>
        </div>   
      </div>
      <div className='text-center'>
      <img src='images/avatarsimg.png' className='h-16 mx-auto'/>
      <div className='text-slate-600 font-semibold mt-2'>
      <h1>Need guidance for farming purposes?</h1>
      <h1>Get in touch with hundreds of Experts,Scientists at a single place!!</h1>
      </div>
      </div>
      <div className='flex justify-between'>
        <div className='ml-20 mt-20'>
        <h1 className='font-semibold text-slate-600 tracking-widest text-2xl ml-8 '>RECENTLY ASKED CATEGORIES</h1>
         <div className='cards mt-5 ml-2 '>
          <Card1/>
          <div className=''>
      <div className="query flex mt-14">
        <img  onClick={()=>navigate('/Quespage')} src='images/addsign.png' className='w-20 ml-10'/>
        <div className='flex flex-col'>
        <p className='mt-3 ml-5 text-bold text-xl tracking-wide'>Add your query which can be</p>
        <p className='ml-5 text-bold text-xl tracking-wide'>be answered by experts!!!</p>
        </div>
      </div>
      </div>
         </div>
        </div>
        <div className='mr-10 mt-20  w-3/6 ml-40'>
         <h1 className='font-semibold text-slate-600 tracking-widest text-2xl text-center ml-32'>EXPERT PROFILES</h1>
         <div className="expertProfile pl-36 mt-10">
          <Card2/>
         </div>
        </div>
      </div>
  </>
  )
}
export default Expertpage
