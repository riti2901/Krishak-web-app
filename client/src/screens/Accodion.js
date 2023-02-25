import React, { useState } from 'react'
import Faqnavbar from './Faqnavbar';
import {questions} from './Data'
import Faqaccodion from './Faqaccodion'
const Accodion = () => {
    return(
        <>
        <Faqnavbar/>
        {questions.map(currElem => (
         <Faqaccodion key={currElem.id} currElement={currElem} />
        ))}
        </>
    )}
export default Accodion
