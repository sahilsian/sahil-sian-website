import { useNavigate, useLocation } from "react-router-dom";
import { useContext } from 'react'
import Text from "../text";
import { Context } from "../../lib/context_provider";
const Navigation = ({tabs}) => {
    const { theme } = useContext(Context);
    return (
        <div style={{ borderColor: theme.bordercolor}} className={``}>
            <div className="md:flex gap-4 items-center">
                <div>
                    <Text level={3} text={"Sahil Sian"}></Text>
                </div>
            {tabs.map((tab) => {
                return (
                    <div>
                        <NavigationTab theme={theme} name={tab.name} route={tab.route}></NavigationTab>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

const NavigationTab = ({name, route, theme}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const path = location.pathname;
    const isActive = route === "" ? path === "/" : path === `/${route}`;
    return (
        <div className="mb-2">
            <span
            onClick={() => {
                navigate(`/${route}`)
            }}
            style={{textDecorationColor: theme.text}}
            className={` cursor-pointer ${isActive ? "font-semibold underline"  : ""}`}
            ><Text level={"p"} text={name}></Text></span>
        </div>
    )
}


export default Navigation