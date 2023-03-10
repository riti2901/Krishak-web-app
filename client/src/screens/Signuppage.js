import React from 'react'
import {useNavigate,Link} from 'react-router-dom';
function Signuppage() {
    const navigate=useNavigate();
  return (
    <>
      <div className='Signuppage'>
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
                   <button  onClick={()=> navigate('/Loginpage')}className='mr-14 text-xl text-white font-bold border-white border-2 rounded-lg w-24 h-10'>Log in</button>
                   <button onClick={()=> navigate('/Signuppage')}className='text-xl text-black font-bold bg-white rounded-lg w-24 h-10'>Sign up</button>
               </div>
            </div>
        </div>
        <div className='w-80 h-fit bg-white mx-auto my-auto rounded-2xl forms pb-5'>
        <form  className="pl-4" action='post'>
        <h1 className='pt-4 text-zinc-600 text-3xl font-bold ml-24'>Sign up</h1>
    <div className=''>
    <div className='mt-2'>
            <label htmlFor='email'>Username<br/></label>
            <input className=" input w-72 h-10 br-4  rounded-md" type="text" name="email" id="email"/><br/><br/>
        </div>
        <div>
            <label htmlFor='Phone no.'>Phone no.<br/></label>
            <input className="w-72 h-10 br-4 rounded-md input" type="tel" name="phn no." id="phn no."/><br/><br/>
        </div>
        <div>
            <label htmlFor='Email'>Email<br/></label>
            <input className="w-72 h-10 br-4  rounded-md input" type="text" name="email" id="email"/><br/><br/>
        </div>
        <div>
            <label htmlFor='Password'>Password<br/></label>
            <input className="w-72 h-10 br-4  rounded-md input" type="password" name="password" id="password"/>
        </div>
        <button  onClick={()=> navigate('/Otppage')}className='text-large text-white font-semibold bg-green-800 rounded-lg w-44 h-8 ml-14 mt-8'>SIGNUP</button>
        <p className='text-green-800 text-xs font-bold ml-14 '><br/>Already have an account? <button onClick={()=> navigate('/Loginpage')}className='text-black'>Login</button></p>
    </div>
    </form>
        </div>    
        </div>
    </>
  )
}
export default Signuppage