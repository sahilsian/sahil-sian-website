import { useNavigate } from "react-router-dom"
import Text from "../../../components/text";
import Spacer from "../../../components/spacer";
import ThemeSelector from "../../../components/themeSelector";
import Image from "../../../components/image";
import Headshot from "../../../public/images/sahil.jpg"

const Home = () => {
    return (
        <div>
            <Image src={Headshot}></Image>
            <Spacer height="10px"></Spacer>
            <Text level={"1"} text={"Hi, I'm Sahil"}></Text>
            <Spacer height="10px"></Spacer>
            <Text level={"5"} text={"I'm a fullstack developer, designer and multimedia artist currently studying at Dalhousie University. Select a theme below and look through my site :_)"}></Text>
            <Spacer height="20px"></Spacer>
            <ThemeSelector></ThemeSelector>
        </div>
    )
}

export default Home;