import react from 'react';
import CardC from './CardC';
import image1 from "../images/carousel1.png";
import image2 from "../images/carousel2.png";
import image3 from "../images/carousel3.png";
const Card3details=[
  {
    id:'1',
    image: image1,
    title: "title",
    heading: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    id:'2',
    image: image2,
    title: "title",
    heading: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    id:'3',
    image: image3,
    title: "title",
    heading: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    id:'4',
    image: image1,
    title: "title",
    heading: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    id:'3',
    image: image2,
    title: "title",
    heading: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
]; const Card3=()=>{
      return(
        <div className='flex overflow-x-auto mx-12'>
      {Card3details.map((eachData)=>{
        return(
          <CardC
            key = {eachData.id}
            image =  {eachData.image}
            title = {eachData.title}
            heading = {eachData.heading}
          />
        
        )
      }
      )
      }
      </div>
    )
}
export default Card3;