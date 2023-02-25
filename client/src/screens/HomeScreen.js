import React from 'react';
import {BiUserCircle} from 'react-icons/bi';
import {GrFacebook}  from 'react-icons/gr';
import {BsInstagram} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';
import { Link,useNavigate} from 'react-router-dom';
import Accodion from './Accodion';
function HomeScreen(){
  const navigate=useNavigate();
 const clickHandle = () => {
  window.scrollTo({top:450,behavior:"smooth"});
 }
  return (
    <>
        <div className='flex flex-col bg1 '>
            <div className='flex justify-between items-center'>
               <div className='flex items-center'>
               <img className='w-1/2' src='images/logo.png' alt='logo'/>
               <ul className='list-none flex gap-12 text-xl text-white'>
               <li><Link to="/">About</Link></li>
               <li onClick={clickHandle} className='cursor-pointer'>Stakeholders</li>
               <li><Link to="/FAQ">FAQ</Link></li>
               </ul>
               </div>
               <BiUserCircle className='fill-white text-7xl pr-7' />
            </div>
            <div className='mb-5'>
            <h1 className='text-5xl font-extrabold text1'>Connecting farmers to</h1>
            <h1 className='text-5xl font-extrabold text1'>opportunities and experts for a
            </h1>
            <h1 className='text-5xl font-extrabold text1'>sustainable future</h1>
            <center><button onClick={() => navigate('/Loginpage')} className='rounded-full font-semibold text-white px-9 py-4 button1 opacity-120'>Get Started</button></center>
            </div>
        </div>
        {/* Stakeholders page */}
        <div className='w-full h-fit-content border-2 stholder'>
         <h1 className='font-extrabold text-4xl text-center mt-4'>Our Stakeholders</h1>
         <div>
         <center><div className='h-96 w-5/6 mt-10 mb-14 flex justify-between items-center '>
         <div className='border-4 w-64 h-72 ml-20 rounded-xl stitems'>
           <img onClick={()=>navigate("/Farmerlandingpage")} src='/images/farmers.png' alt='Farmers-img not found' />
         </div>
         <div className='border-4 w-64 h-72 rounded-xl stitems'>
         <img onClick={()=>navigate("/Landownerlandingpage")}src='/images/Landowners.png' alt='landowners-img not found' />
         </div>
         <div className='border-4 w-64 h-72 mr-20 rounded-xl stitems'>
         <img onClick={()=>navigate("/Expertpage")}src='/images/expert.png' alt='expert-img not found' />
         </div>
         </div></center>
         </div>
        </div>
        {/* ------------------------------------------------------------------------------------------------- */}
        <div className='mt-12 home3 text-5xl font-bold mb-10'>
         <center><div className='text-white tracking-widest leading-normal pt-11 pb-11'>
         <h1>LET US CREATE A</h1>
         <h1>BRIDGE BETWEEN THE</h1>
         <h1>VARIOUS CONSTITUENTS</h1>
         <h1>OF OUR PRIMARY SECTOR</h1>
         </div></center>
        </div>
        <div className='w-full h-fit-content flex justify-between items-center' >
        <div className=' ml-80'>
          <center><h1 className='text-4xl leading-loose font-semibold'>Our vision</h1></center>
           <img src='/images/eyeicon.png' className='h-40 w-40 mb-40'  alt='eyeicon-img not found' />
         </div>
         <div className=' mr-80'>
         <center><h1 className='text-4xl leading-loose font-semibold'>Our Goal</h1></center>
           <img src='/images/goalicon.png' className='h-40 w-40 mb-40' alt='goalicon-img not found' />
         </div>
        </div>
        <div className='w-full h-fit-content flex justify-between items-center qsection '>
          <div className=' h-96 w-96 ml-40 mb-20 mt-20 '>
           <center><h1 className='cws text-4xl font-semibold leading-loose'>CONNECT WITH US</h1>
           <h1 className='mt-5 text-white font-semibold text-3xl'>Have any doubt</h1>
           <h1 className=' text-white font-semibold text-3xl'>regarding the use of</h1>
           <h1 className=' text-white font-semibold  text-3xl'>the platform?</h1>
           <h1 className='mt-5 text-3xl italic text-white font-semibold leading-loose tracking-wider'>Contact us Now!!</h1>
           </center>
           <div className='flex justify-between items-center'>
           <GrFacebook className='fill-white text-4xl ml-20 mt-5'/>
           <BsInstagram className='fill-white text-4xl mt-5'/>
           <BsLinkedin className='fill-white text-4xl mr-20 mt-5' />
           </div>
          </div>
          <div className=' h-96 w-96 mr-40 mb-20 mt-20 form1'>
          <center><div className=' mt-5 text-2xl font-extrabold text-neutral-500'><h1>Send Your Queries</h1></div>
          <div>
            <input type="text" className='rounded-full border-gray-400 border-2 mt-5 text-xl w-80' placeholder="     Enter Your Name"/>
          </div>
          <div>
            <input type="email" className='rounded-full border-gray-400 border-2 text-xl mt-5 w-80' placeholder="     Enter Your Email"/>
          </div>
          <div>
            <input type="text" className='rounded-3xl border-gray-400 border-2 text-xl w-80 mt-5 pb-20' placeholder="     Write Your Message"/>
          </div>
          <button className='rounded-full font-semibold text-white px-12 py-3 button1 opacity-90 text-sm mt-5'>SUBMIT</button></center>
          </div>
        </div>

    </>
  )
}

export default HomeScreen