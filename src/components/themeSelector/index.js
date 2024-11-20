import { useContext } from "react";
import { Context } from "../../lib/context_provider";
import { blueMode, exampleTheme, nightMode, pinkMode } from "../../constants/constants";
import Text from "../text";

const ThemeSelector = () => {
    const { setTheme } = useContext(Context);
    return (
        <div className="font-semibold flex gap-4 border-[1px] p-3">
            <div className="cursor-pointer" onClick={()=> {
                setTheme(exampleTheme)
            }}><Text text={"Light Mode"}></Text></div>
            <div className="cursor-pointer" onClick={()=> {
                setTheme(nightMode)
            }}><Text text={"Dark Mode"}></Text></div>
            <div className=" cursor-pointer" onClick={()=> {
                setTheme(pinkMode)
            }}><Text text={"Pink Mode"}></Text></div>
            <div className=" cursor-pointer" onClick={()=> {
                setTheme(blueMode)
            }}><Text text={"Blue Mode"}></Text></div>
        </div>
    )
}

export default ThemeSelector