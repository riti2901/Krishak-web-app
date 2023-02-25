import React from 'react'
import{useNavigate,Link} from 'react-router-dom';
function Loginpage() {
  const navigate =useNavigate();
  return (
    <>
      <div className='loginpage '>
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
                   <button onClick={()=> navigate('/Loginpage')} className='mr-14 text-xl text-white font-bold border-white border-2 rounded-lg w-24 h-10'>Log in</button>
                   <button onClick={()=> navigate('/Signuppage')}className='text-xl text-black font-bold bg-white rounded-lg w-24 h-10'>Sign up</button>
               </div>
            </div>
        </div>
        <div className='w-80 h-80 bg-white mx-auto my-auto rounded-2xl forms'>
        <form  className="pl-4" action='post'>
        <h1 className='pt-4 text-zinc-600 text-3xl font-bold ml-24'>Log in</h1>
    <div className=''>
    <div className='mt-5'>
            <label htmlFor='email'>Username/Email<br/></label>
            <input className="w-72 h-8 br-4 bg-slate-200 rounded-md" type="text" name="email" id="email"/><br/><br/>
        </div>
        <div>
            <label htmlFor='Password'>Password<br/></label>
            <input className="w-72 h-8 br-4 bg-slate-200 rounded-md" type="password" name="password" id="password"/>
        </div>
        <p><button className='text-green-700 text-xs font-bold ml-44 '>Forgot password?<br/><br/></button></p>
        <button onClick={()=>navigate('/Farmerlandingpage')}  className='text-large text-white font-semibold bg-green-800 rounded-lg w-36 h-8 ml-20'>LOGIN</button>
        <p className='text-green-800 text-xs font-bold ml-24 '><br/>New User? <button onClick={()=> navigate('/Signuppage')} className='text-black'>Signup</button></p>
    </div>
    </form>
        </div>    
        </div>
    </>
  )
}
export default Loginpage