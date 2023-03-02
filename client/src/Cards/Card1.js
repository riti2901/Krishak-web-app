import react from 'react';
import CardA from './CardA';
import image1 from "../images/field.png";
import image2 from "../images/sprouts.png";
import image3 from "../images/planting1.png"

const Card1details=[
  {
    id:'1',
    image: image1,
    title: "Krishak",
    description:" Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
  },
  {
      id:'2',
      image:image2,
      title: "Krishak",
      description:" Lorem Ipksum is simply dummy text of the printing and typesetting industry."
  },
  {
      id:'3',
      image:image3,
      title: "Krishak",
      description:" Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
]; const Card1=()=>{
      return(
        <div>
      {Card1details.map((eachData)=>{
        return(
          <CardA
            key = {eachData.id}
            image =  {eachData.image}
            title = {eachData.title}
            description = {eachData.description}
          />
        )
      }
      )
      }
      </div>
    )
}
export default Card1;

