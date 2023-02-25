import React from 'react'
import {BiUserCircle} from 'react-icons/bi';
import Card3 from '../Cards/Card3';
import Card5 from '../Cards/Card5';
import { BiSlider } from 'react-icons/bi';
import {Link} from 'react-router-dom';
function Farmerlandingpage() {
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
            <div className="Carousel1 ">
            <Card3/>
            </div>
            </div>
            <div className=' flex justify-between mt-16'>
          <div className="filterform2 w-96 ml-20 filterform mt-10 h-fit mb-24 pb-5">
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
            <input className=" w-72 h-8 br-4 bg-slate-200 rounded-md " type="text" name="crops" id="crops"/><br/><br/>
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
           <Card5/>
          </div>
          </div>
    </>
  )
}
export default Farmerlandingpage