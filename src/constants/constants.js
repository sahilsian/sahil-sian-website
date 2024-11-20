import About from "../routes/agnostic/about";
import Art from "../routes/agnostic/art";
import Home from "../routes/agnostic/home/home";
import Programming from "../routes/agnostic/programming";
import Theme from "../routes/agnostic/theme";

export const tabs = [
    {
        name: "Home",
        route: "",
        component: <Home></Home>
    },
    {
        name: "About",
        route: "about",
        component: <About></About>
    },
    {
        name: "Programming",
        route: "programming",
        component: <Programming></Programming>
    },
    {
        name: "Art",
        route: "art",
        component: <Art></Art>
    },
    {
        name: "Theme",
        route: "Theme",
        component: <Theme></Theme>
    },
]

export const exampleTheme = {
    background: "#FFFFFF",
    text: "#000000"
}

export const nightMode = {
    background: "#000000",
    text: "#FFFFFF"
}

export const pinkMode = {
    background: "#FFAADD10",
    text: "#FFAADD"
}

export const blueMode = {
    background: "#00FFFF10",
    text: "#0047AB"
}

