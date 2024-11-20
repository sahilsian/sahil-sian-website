import { useContext, useState } from "react";
import { Context } from "../../lib/context_provider";
import { themes } from "../../constants/constants";
import Text from "../text";
import Spacer from "../spacer";
import Input from "../input";

const ThemeSelector = () => {
    const { setTheme, theme } = useContext(Context);
    const [themeCreator, setThemeCreator] = useState(false);
    const [ openMore, setOpenMore ] = useState(false);
    return (
        <div className=" border-[1px]  p-3" style={{ borderColor: theme.bordercolor }} >
            <Text level={4} text={"Select a Theme"}></Text>
            <Spacer height="20px"></Spacer>
            <div className="font-medium flex gap-4 flex-wrap">
                {themes.slice(0, openMore ? themes.length : 4).map((selectedTheme) => {
                    return (
                        <div className="cursor-pointer" onClick={() => {
                            setTheme(selectedTheme)
                        }}><Text underline={theme.name == selectedTheme.name} text={selectedTheme.name}></Text></div>
                    )
                })}
                <div className="cursor-pointer" onClick={() => {
                            setOpenMore(!openMore)
                        }}><Text underline text={openMore ? "View Less" : "View More"}></Text></div>
            </div>
            <Spacer height="10px"></Spacer>
            {
                themeCreator &&
                <div>
                    <Text level={4} text={"Create a Theme"}></Text>
                    <Spacer height="20px"></Spacer>
                    <div className="flex">

                        <div className="flex-1">
                            <div>
                                <Text text={"Enter a Name"}></Text>
                                <Spacer height="7px"></Spacer>
                                <Input></Input>
                            </div>
                            <Spacer height="12px"></Spacer>
                            <div>
                                <Text text={"Enter a Background Color"}></Text>
                                <Spacer height="7px"></Spacer>
                                <Input></Input>
                            </div>
                        </div>
                        <div className="flex-1"></div>
                    </div>
                </div>
            }
            <Text level={6} text={"Colors generated using generative AI."}></Text>
        </div>

    )
}

export default ThemeSelector