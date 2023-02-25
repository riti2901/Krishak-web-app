import React from "react";
 const CardA = (props) => {
   return(
        <div className='cardslist p-8' key={props.id}>
            <div className="card w-96 text-center h-48 pt-5 rounded-lg">
            <div className="">
              <img className="mx-auto w-16" src={props.image} alt='image not found'/>
              <div className='cardtitle'>
                <h1 className="font-bold text-2xl text-black pt-4 ">{props.title}</h1>
              </div>
              <div className='carddescription'>
                <h1 className=" text-sm">{props.description}</h1>
              </div>
              </div>
            </div>
          </div>
   )
 }
 export default CardA;