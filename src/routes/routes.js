import { useContext, useEffect, useState } from "react";
import { Context } from "../lib/context_provider";
import {
    Routes,
    Route,
    Link,
    useNavigate,
    useLocation,
    Navigate,
    Outlet,
} from "react-router-dom";
import Home from "./agnostic/home/home";
import Loading from "../components/loading";
import Navigation from "../components/navigation";
import { tabs } from "../constants/constants";
import Spacer from "../components/spacer";

const AppRoutes = () => {
    const { user, theme } = useContext(Context);
    const [loading, setLoading] = useState(false)
    return (
        <div style={{ backgroundColor: theme.background }}>
            <div className="mx-auto max-w-[1280px] p-4 min-h-[100vh]" >
                <Navigation tabs={tabs}>
                </Navigation>
                <Spacer height="40px"></Spacer>
                {
                    loading ?
                        <Loading loading={loading}></Loading>
                        :
                        <Routes>
                            {tabs.map((tab) => {
                                return (
                                    <Route path={`/${tab.route}`} element={tab.component}>
                                    </Route>
                                )
                            })}
                        </Routes>
                }

            </div>
        </div>
    )
}

export default AppRoutes;