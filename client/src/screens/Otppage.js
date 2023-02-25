import React from 'react'
import {useNavigate} from 'react-router-dom';
function Otppage() {
  const navigate=useNavigate();
  return (
    <>
      <div className='Otppage pt-40'>
        <div className='w-80 h-96 bg-white rounded-2xl mx-auto forms'>
        <form  className="" action='post'>
        <h1 className='pt-4 text-zinc-600 text-3xl font-bold ml-14'>Enter the OTP</h1>
        <center><p className="text-gray-500 p-5">An OTP has been sent to the added mobile number</p></center>
        <div className='flex justify-between items-center m-5'>
         <input className='bg-slate-200 rounded-xl h-14 w-16 text-base  text-center' type="tel" name="otpno." id="otpno."/>
         <input className='bg-slate-200 rounded-xl h-14 w-16 text-base  text-center' type="tel" name="otpno." id="otpno."/>
         <input className='bg-slate-200 rounded-xl h-14 w-16 text-base  text-center' type="tel" name="otpno." id="otpno."/>
         <input className='bg-slate-200 rounded-xl h-14 w-16 text-base  text-center' type="tel" name="otpno." id="otpno."/>
        </div>
        <p className='text-green-700 text-xs font-bold ml-12 '><br/>Didn't receive the code? <button className='text-black'>Request again</button></p>
        <button onClick={()=> navigate('/Toupage')} className='text-large text-white font-semibold bg-green-700 rounded-lg w-40 h-8 ml-20 mt-8'>VERIFY</button>
        </form>
        </div>
        </div>    
    </>
  )
}
export default Otppage