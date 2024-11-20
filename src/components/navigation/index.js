import { useNavigate, useLocation } from "react-router-dom";
import Text from "../text";
const Navigation = ({tabs}) => {
    return (
        <div className="p-6 border-[1px]">
            <div className="flex gap-4">
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
        <div>
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