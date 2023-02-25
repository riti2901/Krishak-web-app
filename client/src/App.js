import React from 'react';
import {Route,Routes} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import Accodion from './screens/Accodion'
import Expertpage from './screens/Expertpage';
import Loginpage from './screens/Loginpage';
import Signuppage from './screens/Signuppage';
import Otppage from './screens/Otppage';
import Toupage from './screens/Toupage';
import Farmerdetailspage from './screens/Farmerdetailspage';
import Landownerdetailspage from './screens/Landownerdetails';
import Expertdetailspage from './screens/Expertdetailspage';
import  Welcomepage from './screens/Welcomepage';
import Farmerlandingpage from './screens/Farmerlandingpage';
import Quespage from './screens/Quespage';
import LandownerLandingpage from './screens/LandownerLandingpage';
const App = () => {
  return (
    <>
    <Routes>
    <Route path='/' element={<HomeScreen/>} />
    <Route path='/FAQ' element={<Accodion/>} />
    <Route path='/Loginpage' element={<Loginpage/>} />
    <Route path='/Signuppage' element={<Signuppage/>} />    
    <Route path='/Farmerlandingpage' element={<Farmerlandingpage/>} /> 
    <Route path='/Landownerlandingpage' element={<LandownerLandingpage/>} /> 
    <Route path='/Otppage' element={<Otppage/>} /> 
    <Route path='/Toupage' element={<Toupage/>} /> 
    <Route path='/Farmerdetailspage' element={<Farmerdetailspage/>} /> 
    <Route path='/Landownerdetailspage' element={<Landownerdetailspage/>} /> 
    <Route path='/Quespage' element={<Quespage/>} /> 
    <Route path='/Expertpage' element={< Expertpage/>} /> 
    <Route path='/Expertdetailspage' element={< Expertdetailspage/>} /> 
    <Route path='/Welcomepage' element={< Welcomepage/>} /> 
    </Routes>
    </>
  )
}
export default App
