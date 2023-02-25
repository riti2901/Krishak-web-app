import React from "react";
 const CardB = (props) => {
   return(
     <div className="cardslist p-5" key={props.id}>
         <div className="card h-28">
         <div className="ctr flex">
         <div className="image">
             <img className="ml-5 w-16 pt-5" src={props.image} alt='image not found'/>
             </div>
             <div className="pl-8 pt-5">
             <div className="name font-bold">
              {props.name}
             </div>
             <div className="des flex">
             <div className="designation pt-2">
              {props.icon1}</div>
              <h1 className="pl-4 pt-1">{props.designation}</h1>
             </div>
            <div className="ph flex">
            <div className="phnno pt-2">
             {props.icon2}</div>
              <h1 className="pl-4 pt-1" >{props.phoneno}</h1>
            </div>
             </div>
         </div>
         </div>
     </div>
   )
 }
 export default CardB;