import { useNavigate } from "react-router-dom"
import Text from "../../../components/text";

const Art = () => {
    return (
        <div>
            <Text level={"1"} text={"Art"}></Text>
            <a className="underline" target="_blank" href="https://instagram.com/sahil.0x73"><Text text={"Art Instagram"}></Text></a>
        </div>
    )
}

export default Art;