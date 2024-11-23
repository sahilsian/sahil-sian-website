import { useNavigate } from "react-router-dom"
import Text from "../../../components/text";
import Spacer from "../../../components/spacer";
import ThemeSelector from "../../../components/themeSelector";
import Image from "../../../components/image";
import Headshot from "../../../public/images/sahil.jpg"
import FourCol from "../../../components/fourCol";
import { art } from "../../../constants/constants";

const Home = () => {
    return (
        <div>
            <Image rounded src={Headshot}></Image>
            <Spacer height="10px"></Spacer>
            <Text level={"1"} text={"Hi, I'm Sahil."}></Text>
            <Text level={"5"} text={"I'm a fullstack developer, designer and multimedia artist currently studying at Dalhousie University."}></Text>
            <Spacer height="20px"></Spacer>
            <ThemeSelector></ThemeSelector>
            <Spacer height="20px"></Spacer>
            <Text level={"2"} text={"My Art"}></Text>
            <FourCol arr={art}></FourCol>
        </div>
    )
}

export default Home;