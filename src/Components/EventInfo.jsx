import { CiLocationOn } from "react-icons/ci";
import { CiFaceSmile } from "react-icons/ci";
import { CiViewList } from "react-icons/ci";
import { LiIt } from "./Styles.styled"
export default function EventInfo({ name, place, person, date, duration, start, end }) {
   let time = start- end
    return (
        <LiIt key={name}><div>
            <h3>{name}</h3>
            <p> {<CiLocationOn />}{place}</p>
            <p>{<CiFaceSmile />} {person}</p>
            <p>{<CiViewList />} {date}</p>
            <p>{duration}</p>
        </div> </LiIt>
    )
}