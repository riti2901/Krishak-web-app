import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
function Farmerdetailspage() {
    const navigate=useNavigate();
  return (
    <>
      <div className='Farmerdetailspage '>
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
                   <button onClick={()=>navigate("/Loginpage")} className='mr-14 text-xl text-white font-bold border-white border-2 rounded-lg w-24 h-10'>Log in</button>
                   <button  onClick={()=>navigate("/Signuppage")}className='text-xl text-black font-bold bg-white rounded-lg w-24 h-10'>Sign up</button>
               </div>
            </div>
        </div>
        <div className='w-96 h-fit pb-5 bg-white mx-auto my-auto rounded-2xl forms'>
        <form action='post'>
        <h1 className='pt-4 text-zinc-600 text-3xl font-bold ml-14'>Enter Your details</h1>
    <div className=''>
    <div className='mt-5 ml-5'>
            <label htmlFor='name'>Name<br/></label>
            <input className="w-80 h-10 br-4  rounded-md input" type="text" name="name" id="name"/><br/><br/>
        </div>
        <div className='inline-block ml-5'>
        <label htmlFor='DOB'>DOB<br/></label>
         <input className="w-36 h-10 br-4  rounded-md input" type="date" name="DOB" id="DOB"/></div>
         <div className='inline-block ml-4'>
         <label htmlFor='yoe'> Years of Experience<br/></label>
         <input className="w-36 h-10 br-4  rounded-md  input" type="number" name="yoe" id="yoe"/>
         </div>
        <div className='ml-5 inline-block mt-5'>
            <label htmlFor='state'>State<br/></label>
            <input className="w-36 h-10 br-4 rounded-md input" type="text" name="state" id="state"/>
        </div>
        <div className='ml-4 inline-block'>
            <label htmlFor='District'>District<br/></label>
            <input className="w-36 h-10 br-4  rounded-md input" type="text" name="district" id="District"/>
        </div>
        <button onClick={()=> navigate('/Welcomepage')}  className='text-large text-white font-semibold bg-green-700 rounded-lg w-36 h-8 ml-28 mt-5'>SUBMIT</button>
    </div>
    </form>
        </div>    
        </div>
    </>
  )
}
export default Farmerdetailspage