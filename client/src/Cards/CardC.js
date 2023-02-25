import React from "react";
 const CardC = (props) => {
   return(
        <div className='cardslist p-2 flex justify-between items-center' key={props.id}>
            <div className="card w-96 text-center h-60 rounded-2xl" style={{backgroundImage:`url(${props.image})`,backgroundPosition:"center",backgroundSize:"cover"}}>
            <div className='cardtitle'>
                <h1 className="font-bold text-2xl text-black pt-6 mr-72 text-black">{props.title}</h1>
              </div>
              <div className='carddescription'>
                <h1 className=" text-sm mr-16 text-black">{props.heading}</h1>
              </div>
              <button className="bg-white text-black rounded-2xl text-sm p-2 mt-20 font-bold mr-64">Show all</button>
            </div>
          </div>
   )
 }
 export default CardC;