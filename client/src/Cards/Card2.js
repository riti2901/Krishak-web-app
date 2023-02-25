import react from 'react';
import CardB from './CardB';
import image1 from "../images/avatar1.png";
import image2 from "../images/avatar2.png";
import image3 from "../images/avatar3.png"
import {BsBagDash} from 'react-icons/bs';
import {BsTelephone} from 'react-icons/bs';
const Card2details=[
  {
    id:'1',
    image: image1,
    icon1:<BsBagDash/>,
    icon2:<BsTelephone/>,
    name: "Name",
    designation: "Designation",
    phoneno:9786234518
  },
  {
    id:'2',
    image: image2,
    icon1:<BsBagDash/>,
    icon2:<BsTelephone/>,
    name: "Name",
    designation: "Designation",
    phoneno:9786234518
  },
  {
    id:'3',
    icon1:<BsBagDash/>,
    icon2:<BsTelephone/>,
    image: image3,
    name: "Name",
    designation: "Designation",
    phoneno:9786234518
  },
  {
    id:'4',
    icon1:<BsBagDash/>,
    icon2:<BsTelephone/>,
    image: image1,
    name: "Name",
    designation: "Designation",
    phoneno:9786234518
  },
  {
    id:'5',
    icon1:<BsBagDash/>,
    icon2:<BsTelephone/>,
    image: image2,
    name: "Name",
    designation: "Designation",
    phoneno:9786234518
  },
  {
    id:'6',
    icon1:<BsBagDash/>,
    icon2:<BsTelephone/>,
    image: image3,
    name: "Name",
    designation: "Designation",
    phoneno:9786234518
  },
]; const Card2=()=>{
      return(
        <div>
      {Card2details.map((eachData)=>{
        return(
          <CardB
            key = {eachData.id}
            image =  {eachData.image}
            name = {eachData.name}
            icon1 = {eachData.icon1}
            designation={eachData.designation}
            icon2 = {eachData.icon2}
            phoneno= {eachData.phoneno}
          />
        )
      }
      )
      }
      </div>
    )
}
export default Card2;