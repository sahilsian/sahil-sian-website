import { useNavigate } from "react-router-dom"
import Text from "../../../components/text";

const Programming = () => {
    return (
        <div>
            <Text level={"1"} text={"Programming"}></Text>
            <a className="underline" target="_blank" href="https://github.com/sahilsian"><Text text={"Github"}></Text></a>
        </div>
    )
}

export default Programming;