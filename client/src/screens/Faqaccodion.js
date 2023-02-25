import React,{useState} from 'react'
import {IoIosArrowDown} from 'react-icons/io'
const Faqaccodion = ({currElement}) => {
const [toggle,setToggle] = useState(false);

const closeOpen = () => {
    if (toggle === false) {
        setToggle(true);
      } else {
        setToggle(false);
      }
}
    return(
        <>
          <div className='flex justify-center my-10'>
          <div  className=' w-4/5 min-h-min gap-10 flex flex-col rounded p-6 border-green-700 border-4 '>
               <div className='flex justify-between items-center w-full'>
                 <h1 className='w-11/12 font-bold'>{currElement.question}</h1>
                 <IoIosArrowDown className='text-xl font-bold' onClick={closeOpen}/>
               </div>
              {toggle && ( <h1 className='font-bold'>{currElement.answer}</h1>)}
          </div>
          </div>
        </>
    )}

export default Faqaccodion
