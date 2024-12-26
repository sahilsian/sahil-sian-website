import { useContext, useEffect, useState } from "react";
import { Context } from "../../lib/context_provider";
import { themes } from "../../constants/constants";
import Text from "../text";
import Spacer from "../spacer";
import Input from "../input";
import { IoColorPaletteOutline } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { Slider } from "@nextui-org/slider";

const ThemeSelector = () => {
    const { setTheme, theme } = useContext(Context);
    const [themeCreator, setThemeCreator] = useState(false);
    const [showSelector, setShowSelector] = useState(false);
    const [ viewMore, setViewMore ] = useState(false);
    const [ themeIndex, setThemeIndex] = useState(-1);

    useEffect(()=> {
        if(themeIndex != -1) {
            setTheme(themes[themeIndex])
        }
    }, [themeIndex])

    return (
        <div>
            {showSelector ?
             <div className=" border-[1px]  select-none  p-3" style={{ borderColor: theme.bordercolor }} >
            <div className="flex items-center gap-4 justify-between">
            <div className=" cursor-pointer" onClick={()=> {
                setShowSelector(!showSelector)
             }}>
                <Text level={4} text={"Select a Theme"}></Text>
             </div>
             <div className=" cursor-pointer hover:opacity-70 transition-all" onClick={()=> {
                setShowSelector(!showSelector)
             }}>
                <IoIosClose style={{fontSize: "22px", color: theme.text}}></IoIosClose>
             </div>
            </div>
             <Spacer height="6px"></Spacer>
             <div className="flex gap-4 flex-wrap">
                 {themes.slice(0, viewMore ? themes.length : 4).map((selectedTheme) => {
                     return (
                         <div className="cursor-pointer select-none transition-all hover:opacity-70" onClick={() => {
                             setTheme(selectedTheme)
                         }}><Text bold={theme.name == selectedTheme.name} underline={theme.name == selectedTheme.name} text={selectedTheme.name}></Text></div>
                     )
                 })}
                 <div className="cursor-pointer transition-all hover:opacity-70" onClick={() => {
                             setViewMore(!viewMore)
                         }}><Text underline text={viewMore ? "View Less" : "View More"}></Text></div>
             </div>
             <Spacer height="15px"></Spacer>
             {viewMore &&
                <div>
                    {/* <Slider classNames={{
                        
                    }} onChange={(value)=> {
                        setThemeIndex(value)
                    }} step={1} size="md" minValue={0} maxValue={themes.length - 1} ></Slider> */}
                </div>
             }
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
             {viewMore && <div>
                {/* <Text level={6} text={"Colors generated using generative AI."}></Text> */}
             {/* <Spacer height="15px"></Spacer> */}
             
             </div>}
         </div>
            :
            <div className="border-[1px] select-none max-w-[200px] p-2 flex items-center gap-4 cursor-pointer hover:opacity-70 transition-opacity" onClick={() => {
                setShowSelector(!showSelector)
            }} style={{borderColor: theme.bordercolor}}>
                <IoColorPaletteOutline style={{ color: theme.text, fontSize: "2rem"}}></IoColorPaletteOutline>
                <Text level={4} text={"Select a Theme"}></Text>
            </div>
            }
        </div>

    )
}

export default ThemeSelector