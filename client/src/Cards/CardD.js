import React from "react";
import { GoLocation } from "react-icons/go";
 const CardD = (props) => {
   return(
        <div className='cardslist p-5 ml-40 ' key={props.id}>
            <div className=" text-gray-500 card w-11/12 p-5 text-center h-60 rounded-2xl farmerpagecard">
              <div className="line1 flex justify-between">
                  <h1  className="text-3xl font-semibold" >{props.name}</h1>
                  <div className="text-4xl">{props.icon5}</div>
              </div>
              <div className="line2 pt-5 flex justify-between">
              <div className="loc flex mt-5">
               <div className="pr-2 mt-1">{props.icon3}</div>
               <h1 className="pb-2">{props.place}</h1>
              </div>
              <div className="phn flex mt-5">
               <div  className="pr-2 mt-1">{props.icon1}</div>
               <h1 className="mr-16">{props.phoneno}</h1>
              </div>
              </div>
              <div className="line3 flex justify-between">
              <div className="date flex mt-5">
               <div  className="pr-2 mt-1">{props.icon2}</div>
               <h1 className="mr-16">{props.head1}</h1>
              </div>
              <div className="availability flex mt-5">
               <div  className="pr-2 mt-1">{props.icon4}</div>
               <h1 className="mr-16">{props.head2}</h1>
              </div>
              </div>
              <div className="line4 flex justify-between">
               <h1>{props.head1ans}</h1>
               <h1 className="mr-16">{props.head2ans}</h1>
              </div>
              </div>
          </div>
   )
 }
 export default CardD;
 