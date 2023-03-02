import react from 'react';
import CardE from './CardE';
import {GiDuration} from 'react-icons/gi';
import {CgPlayTrackPrevO} from 'react-icons/cg';
import {GoLocation} from 'react-icons/go';
import {AiOutlinePhone} from 'react-icons/ai';
import {BiUserCircle} from 'react-icons/bi';
const Card5details=[
  {
    id:'1',
    name: "Landowner1 Name",
    Amount:"Amount of Land",
    icon1:<AiOutlinePhone/>,
    icon2:<CgPlayTrackPrevO/>,
    icon3:<GoLocation/>,
    icon4:<GiDuration/>,
    place:"Hisar",
    phoneno:9876235629,
    head1:"Startdate",
    head1ans:"Immediately",
    head2:"Availability",
    head2ans:"2 Months",
    icon5:<BiUserCircle/>
  },
  {
    id:'2',
    name: "Landowner2 Name",
    Amount:"Amount of Land",
    icon1:<AiOutlinePhone/>,
    icon2:<CgPlayTrackPrevO/>,
    icon3:<GoLocation/>,
    icon4:<GiDuration/>,
    place:"Hisar",
    phoneno:9876235629,
    head1:"Startdate",
    head1ans:"Immediately",
    head2:"Availability",
    head2ans:"2 Months",
    icon5:<BiUserCircle/>
  },
  {
    id:'3',
    name: "Landowner3 Name",
    Amount:"Amount of Land",
    icon1:<AiOutlinePhone/>,
    icon2:<CgPlayTrackPrevO/>,
    icon3:<GoLocation/>,
    icon4:<GiDuration/>,
    place:"Hisar",
    phoneno:9876235629,
    head1:"Startdate",
    head1ans:"Immediately",
    head2:"Availability",
    head2ans:"2 Months",
    icon5:<BiUserCircle/>
  },
  {
    id:'4',
    name: "Landowner4 Name",
    Amount:"Amount of Land",
    icon1:<AiOutlinePhone/>,
    icon2:<CgPlayTrackPrevO/>,
    icon3:<GoLocation/>,
    icon4:<GiDuration/>,
    place:"Hisar",
    phoneno:9876235629,
    head1:"Startdate",
    head1ans:"Immediately",
    head2:"Availability",
    head2ans:"2 Months",
    icon5:<BiUserCircle/>
  },
  {
    id:'5',
    name: "Landowner5 Name",
    Amount:"Amount of Land",
    icon1:<AiOutlinePhone/>,
    icon2:<CgPlayTrackPrevO/>,
    icon3:<GoLocation/>,
    icon4:<GiDuration/>,
    place:"Hisar",
    phoneno:9876235629,
    head1:"Startdate",
    head1ans:"Immediately",
    head2:"Availability",
    head2ans:"2 Months",
    icon5:<BiUserCircle/>
  },
]; const Card5=()=>{
      return(
        <div className="overflow-y-scroll h-full">
      {Card5details.map((eachData)=>{
        return(
          <CardE
            key = {eachData.id}
            name={eachData.name}
            Amount={eachData.Amount}
            place={eachData.place}
            phoneno={eachData.phoneno}
            head1={eachData.head1}
            head1ans={eachData.head1ans}
            head2={eachData.head2}
            head2ans={eachData.head2ans}
            icon1={eachData.icon1}
            icon2={eachData.icon2}
            icon3={eachData.icon3}
            icon4={eachData.icon4}
            icon5={eachData.icon5}
          />
        )
      }
      )
      }
      </div>
    )
}
export default Card5;