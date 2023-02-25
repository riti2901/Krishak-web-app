import React from 'react'
import {BiUserCircle} from 'react-icons/bi';
import {BiSlider} from 'react-icons/bi';
import Card4 from '../Cards/Card4';
import {Link} from 'react-router-dom';
function LandownerLandingpage() {
  return (
   <>
   <div className="wholepage pb-20">
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
        <div className="flex flex-col">
        <div className='text-6xl font-black ml-20 leading-tight'>
        <h1>Want farmers to</h1>
        <h1>cultivate your?</h1>
        <h1>Land</h1>
        </div>
        <div className='ml-20 text-2xl font-semibold'>
            <h1>Get in touch with hundreds</h1>
            <h1>of Farmers through KRISHAK</h1>
        </div>
        </div>
        <div>
        <img src='images/Landownerpageimg.png' alt='expertpic' className='h-96'/>
        </div>   
      </div>
      <div className=' flex justify-between'>
          <div className="filterform2 w-96 ml-20 filterform mt-10 h-fit">
          <div className="filters flex ml-24 gap-2">
          <BiSlider className='fill-green-600 text-4xl'/>
          <h1 className='text-3xl'>Filters</h1>
          </div>       
            <form>
            <div className="checkbox flex ml-24 mt-5 gap-2 font-semibold">
            <input type="checkbox" id="check" name="preference" value="check"/>
            <h1>As per the preferences</h1>
            </div>
            <div className='mt-5 ml-10'>
            <label htmlFor='location'>Location<br/></label>
            <input className=" w-72 h-8 br-4 bg-slate-200 rounded-md" type="text" name="loc" id="loc" placeholder='E.g. Hisar'/><br/><br/>
        </div> 
        <div className='mt-1 ml-10'>
            <label htmlFor='Crops'>Crops<br/></label>
            <input className=" w-72 h-8 br-4 bg-slate-200 rounded-md" type="text" name="crops" id="crops"/><br/><br/>
        </div>
        <div className='mt-1 ml-10'>
            <label htmlFor='Time Duration'>Time Duration<br/></label>
            <input className=" w-72 h-8 br-4 bg-slate-200 rounded-md" type="number" name="time" id="time" placeholder="E.g 2 (2 months)"/><br/><br/>
        </div>
        <div className="btn flex justify-between mt-2 ml-4 mr-4 text-green-700 font-bold">
            <button className=''>Apply</button>
            <button className=''>Clear all</button>
        </div>
            </form>
          </div>
          <div className="carousel3 w-3/6 mt-5 mr-10">
           <Card4/>
          </div>
      </div>
</div>
   </>
  )
}

export default LandownerLandingpage