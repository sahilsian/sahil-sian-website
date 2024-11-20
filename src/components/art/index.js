import { art } from "../../constants/constants"
import ImageText from "../imageText"

const Art = () => {
    return (
        <div className="flex flex-wrap gap-4">
            {art.slice(0, 4).map((item) => {
                console.log(item)
                return (
                    <div className="flex-1">
                    <ImageText source={item.image} title={item.mame} description={item.description} alt={item.alt}></ImageText>
                    </div>
                )
            })}
        </div>
    )
}

export default Art