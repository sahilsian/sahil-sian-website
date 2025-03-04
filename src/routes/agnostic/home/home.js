import { useNavigate } from "react-router-dom"
import Text from "../../../components/text";
import Spacer from "../../../components/spacer";
import ThemeSelector from "../../../components/themeSelector";
import Image from "../../../components/image";
import Headshot from "../../../public/images/sahil.jpg"
import FourCol from "../../../components/fourCol";
import { art } from "../../../constants/constants";
import { ProductUI } from "../../../constants/constants";
const Home = () => {
    return (
        <div>
            <Image rounded src={Headshot}></Image>
            <Spacer height="10px"></Spacer>
            <Text level={"1"} text={"Hi, I'm Sahil."}></Text>
            <i><Text level={"p"} text={"I like to draw and code :P"}></Text> </i>
            <b><Text level={"p"} text={"Fullstack Developer, Multidisciplinary Artist & UX/UI/Graphic Designer. React Pro."}></Text> </b>
            <Spacer height="10px"></Spacer>
            <ThemeSelector></ThemeSelector>
            <Spacer height="20px"></Spacer>
            <Text level={"2"} text={"Apps"}></Text>
            <Spacer height="10px"></Spacer>
            <FourCol arr={ProductUI} start={4} end={8}></FourCol>
            <Spacer height="20px"></Spacer>
            <Text level={"2"} text={"Art & Design"}></Text>
            <Spacer height="10px"></Spacer>
            <FourCol arr={art}></FourCol>
            <Spacer height="20px"></Spacer>
            <FourCol arr={art} start={4} end={8}></FourCol>
            <Spacer height="40px"></Spacer>
            <Text level={"2"} text={"Product & UI"}></Text>
            <Spacer height="10px"></Spacer>
            <FourCol arr={ProductUI}></FourCol>
            <Spacer height="40px"></Spacer>
        </div>
    )
}

export default Home;