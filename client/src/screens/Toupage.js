import React from 'react'
import {useNavigate,Link} from 'react-router-dom'
function Toupage() {
  const navigate=useNavigate();
  return (
    <>
      <div className='Toupage'>
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
            </div>
        </div>
        <div className='w-80 h-80 bg-white mx-auto my-auto rounded-2xl forms'>
        <form  className="pl-4 mt-10">
        <h1 className='pt-2 text-zinc-600 text-3xl font-bold ml-2'>What type of User</h1>
        <h1 className='pt-2 text-zinc-600 text-3xl font-bold ml-20'>you are?</h1>
        <div className='flex flex-col'>
          <button onClick={()=> navigate('/Farmerdetailspage')} className="text-large text-green-800 font-semibold border-green-800 border-2 rounded-lg w-44 h-8 ml-14 mt-8 hover:bg-green-800 hover:text-white">A Farmer</button>
          <button onClick={()=> navigate('/Landownerdetailspage')} className="text-large text-teal-900 font-semibold border-teal-900 border-2 rounded-lg w-44 h-8 ml-14 mt-8 hover:bg-teal-900 hover:text-white">Land Owner</button>
          <button onClick={()=> navigate('/Expertdetailspage')} className="text-large text-yellow-900 font-semibold border-yellow-900 border-2 rounded-lg w-44 h-8 ml-14 mt-8 hover:bg-yellow-900 hover:text-white">Expert</button>
        </div>
    </form>
        </div>    
        </div>
    </>
  )
}
export default Toupage