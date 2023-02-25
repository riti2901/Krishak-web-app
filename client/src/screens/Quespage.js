import React from 'react'
import {MdKeyboardVoice} from 'react-icons/md';
import {useNavigate} from 'react-router-dom';
function Quespage(){
    const navigate=useNavigate();
  return (
       <>
       <div className="backpage pt-32">
       <div className='w-96 h-96 bg-white mx-auto rounded-2xl Quespageform'>
        <form action='post'>
        <h1 className='pt-4 text-zinc-600 text-3xl font-bold ml-14'>Enter Your details</h1>
    <div>
    <div className='mt-8 ml-5'>
            <input className="w-80 h-8 br-4 bg-slate-200 rounded-md text-base" type="text" placeholder="Name" name="name" id="name"/><br/><br/>
        </div>
        <div className='ml-5'>
            <input className="w-80 h-8 br-4 bg-slate-200 rounded-md text-base" type="text" placeholder="Phone no." name="name" id="name"/><br/><br/>
        </div>
        <div className='ml-5'>
            <input className="w-80 h-8 br-4 bg-slate-200 rounded-md text-base" type="text" placeholder="Enter your Question here" name="name" id="name"/><br/><br/>
        </div>
        <MdKeyboardVoice className="right text-2xl ml-80 fill-gray-700"/>
        <button  onClick={()=>navigate('/Expertpage')} className='text-large text-white font-semibold bg-green-700 rounded-lg w-36 h-8 ml-28 mt-10'>SUBMIT</button>
    </div>
    </form>
        </div> 
       </div>
  </>
  )
}
export default Quespage
