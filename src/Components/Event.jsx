import EventInfo from "./EventInfo"
import { UlIt } from "./Styles.styled"
export default function Event({ prop }) {
    return (
        <UlIt>

            {prop.map((item) => {
                return <EventInfo name={item.name}
                    place={item.location}
                    person={item.speaker}
                    date={item.time.start}
                // duration={item.time}
                />
            })}

        </UlIt>
    )
}