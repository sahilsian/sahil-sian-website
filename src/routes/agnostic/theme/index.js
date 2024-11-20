import { useNavigate } from "react-router-dom"
import Text from "../../../components/text";
import { useContext } from "react";
import { Context } from "../../../lib/context_provider";
import { blueMode, exampleTheme, nightMode, pinkMode } from "../../../constants/constants";
import ThemeSelector from "../../../components/themeSelector";
import Spacer from "../../../components/spacer";

const Theme = () => {
    
    return (
        <div>
            <Text level={"1"} text={"Select a Theme for this Site"}></Text>
            <Spacer height="20px"></Spacer>
            <ThemeSelector></ThemeSelector>
        </div>
    )
}
export default Theme;