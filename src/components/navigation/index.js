import { useNavigate, useLocation } from "react-router-dom";
import { useContext } from 'react'
import Text from "../text";
import { Context } from "../../lib/context_provider";
const Navigation = ({tabs}) => {
    const { theme } = useContext(Context);
    return (
        <div style={{ borderColor: theme.bordercolor}} className={`p-6 border-[1px]`}>
            <div className="flex gap-4 items-center">
                <div>
                    <Text level={3} text={"Sahil Sian"}></Text>
                </div>
            {tabs.map((tab) => {
                return (
                    <div>
                        <NavigationTab name={tab.name} route={tab.route}></NavigationTab>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

const NavigationTab = ({name, route}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const path = location.pathname;
    const isActive = route === "" ? path === "/" : path === `/${route}`;
    console.log(path)
    console.log(route)
    return (
        <div className="mb-2">
            <span
            onClick={() => {
                navigate(`/${route}`)
            }}
            className={` cursor-pointer ${isActive ? "font-semibold underline"  : ""}`}
            ><Text text={name}></Text></span>
        </div>
    )
}


export default Navigation