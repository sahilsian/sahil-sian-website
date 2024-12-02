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

export const art = [
    {
        mame: '"Sahil Sian", Sahil Sian, Graphite, 2023',
        description: "Self Portrait of Sahil Sian. Graphite on vellum bristol paper.",
        image: "https://i.ibb.co/Krry3MR/402410472-308190668836080-4405343109634659837-n.jpg",
        alt: "Sahil Sian self portrait drawing"
    },
    {
        mame: 'Playstation Controller Study, Sahil Sian, Vector Graphics, 2021',
        description: "Hyper realistic play station controller created using vector graphics. Scallable for all sizes.",
        image: "https://i.ibb.co/Y7rPF19/428442496-383630920957853-6165255927581145176-n.jpg",
        alt: "Vector graphics play station controller"
    },
    {
        mame: '"Bridgewater, NS", Sahil Sian, Graphite, 2024',
        description: "Drawing a rainy day on a townside of Nova Scotia.",
        image: "https://i.imgur.com/oHMabid.jpeg",
        alt: "Drawing a rainy day on a townside of Nova Scotia."
    },
    {
        mame: '"War and Remembrance", Sahil Sian, Graphite, 2019',
        description: "Competition piece for 2019 National Youth Remembrance Contest Canada.",
        image: "https://i.ibb.co/GCvZdRf/65779804-150885499387741-6023726016005703968-n.jpg",
        alt: "Drawing of an older veteran in remembrance of his past."
    }
]

export const ProductUI = [
    {
        mame: 'Dismegle App',
        description: "Branding and marketing for the Dismegle discord community. Developed a marketing strategy that grew Dismegle to 100,000 users.",
        image: "https://i.imgur.com/BfpnRJU.png",
        alt: "Dismegle Logo"
    },
    {
        mame: 'Estate Lynx Branding & UI',
        description: "Branding and UI for Red Bull Canada Basement winners, Estate Lynx.",
        image: "https://i.imgur.com/JE3RbNL.png",
        alt: "UX/UI Design for Estate Lynx"
    },
    {
        mame: 'Rec N Roll Website Design & Development',
        description: "Website Design and Development for Rec N Roll, a family event center in Cambelton, NB.",
        image: "https://i.imgur.com/CZVqwyh.png",
        alt: "Image of Wireframes"
    },
    {
        mame: 'Elephant App. Research, Design & Frontend Development',
        description: "Elephant is an application intented to connect individuals with intellectual disabilities with specialized educators. Application research, design & development.",
        image: "https://i.imgur.com/pLtj5ie.png",
        alt: "Slide from app presentation deck."
    }
]

export const themes = [
    {
        name: "Default",
        background: "#FFFFFF",
        text: "#000000",
        bordercolor: "#e6e9eb"
    },
    {
        name: "Night Mode",
        background: "#000000",
        text: "#FFFFFF",
        bordercolor: "#c0c2c2"
    },
    {
        name: "Pink Mode",
        background: "#ffecff",
        text: "#ee62dd",
        bordercolor: "#e3c5de"
    },
    {
        name: "Blue Mode",
        background: "#dcf5ff",
        text: "#2494bf",
        bordercolor: "#5ec6ef"
    },
    {
        name: "Green Mode",
        background: "#e9f7e1",
        text: "#329932",
        bordercolor: "#a8d5a1"
    },
    {
        name: "Autumn Mode",
        background: "#fef6e4",
        text: "#cc7722",
        bordercolor: "#f5cd9b"
    },
    {
        name: "Retro Mode",
        background: "#fceae8",
        text: "#d43d51",
        bordercolor: "#f8b1b1"
    },
    {
        name: "Ocean Mode",
        background: "#d9f2f9",
        text: "#256d7b",
        bordercolor: "#92d0dc"
    },
    {
        name: "Lavender Mode",
        background: "#f3ebff",
        text: "#946dbd",
        bordercolor: "#c7abdd"
    },
    {
        name: "Sunset Mode",
        background: "#ffd5c2",
        text: "#b3422a",
        bordercolor: "#f5a58e"
    },
    {
        name: "Midnight Mode",
        background: "#1a1a2e",
        text: "#ffffff",
        bordercolor: "#282848"
    },
    {
        name: "Sage Mode",
        background: "#dff0d8",
        text: "#3b7843",
        bordercolor: "#a6c4a0"
    },
    {
        name: "Berry Mode",
        background: "#f9e8f8",
        text: "#812f67",
        bordercolor: "#d89ec9"
    },
    {
        name: "Golden Hour",
        background: "#fff3e2",
        text: "#b96d12",
        bordercolor: "#f5c27d"
    },
    {
        name: "Forest Mode",
        background: "#e3f2e1",
        text: "#2a6629",
        bordercolor: "#86b686"
    },
    {
        name: "Tropical Mode",
        background: "#fdf6d9",
        text: "#d48b3e",
        bordercolor: "#ecc882"
    },
    {
        name: "Rose Gold Mode",
        background: "#fef0e8",
        text: "#b7685d",
        bordercolor: "#dca797"
    },
    {
        name: "Coffee Mode",
        background: "#f4e3d0",
        text: "#6f4e37",
        bordercolor: "#c1a38a"
    },
    {
        name: "Plum Mode",
        background: "#f6edf8",
        text: "#6a347b",
        bordercolor: "#c4a6d4"
    },
    {
        name: "Coral Mode",
        background: "#ffe6e6",
        text: "#d94862",
        bordercolor: "#f3a4a8"
    },
    {
        name: "Emerald Mode",
        background: "#d6f9eb",
        text: "#3b9178",
        bordercolor: "#91d5c1"
    },
    {
        name: "Cream Mode",
        background: "#fffde7",
        text: "#917e34",
        bordercolor: "#e4dbb2"
    },
    {
        name: "Slate Mode",
        background: "#e4e9f1",
        text: "#33475b",
        bordercolor: "#a5b5cb"
    },
    {
        name: "Pastel Mode",
        background: "#fefaf6",
        text: "#a48ca2",
        bordercolor: "#dfc4d8"
    },
    {
        name: "Citrus Mode",
        background: "#fffce6",
        text: "#b09b35",
        bordercolor: "#f5e8a3"
    },
    {
        name: "Royal Mode",
        background: "#e5e6f2",
        text: "#3333a3",
        bordercolor: "#a3a7d3"
    },
    {
        name: "Shadow Mode",
        background: "#2f2f2f",
        text: "#d9d9d9",
        bordercolor: "#595959"
    },
    {
        name: "Ivory Mode",
        background: "#fffff0",
        text: "#757575",
        bordercolor: "#e8e8d0"
    },
    {
        name: "Dusk Mode",
        background: "#ffece7",
        text: "#824a4a",
        bordercolor: "#d9a29c"
    },
    {
        name: "Azure Mode",
        background: "#e1f4ff",
        text: "#1d6c9d",
        bordercolor: "#a3cfe3"
    },
    {
        name: "Copper Mode",
        background: "#fff4e1",
        text: "#a05c35",
        bordercolor: "#d2a37e"
    },
    {
        name: "Teal Mode",
        background: "#e0f7f7",
        text: "#2a7979",
        bordercolor: "#a8d4d4"
    },
    {
        name: "Candy Mode",
        background: "#fff1f7",
        text: "#e46ab6",
        bordercolor: "#f7c0e3"
    },
    {
        name: "Clay Mode",
        background: "#efe5d5",
        text: "#6c4c3d",
        bordercolor: "#c6b6a2"
    },
    {
        name: "Amber Mode",
        background: "#fff5e6",
        text: "#bf8a30",
        bordercolor: "#e7cb9c"
    },
    {
        name: "Mint Mode",
        background: "#e3fdf7",
        text: "#4ca58b",
        bordercolor: "#a6e2d0"
    },
    {
        name: "Ruby Mode",
        background: "#fce8ed",
        text: "#ab2348",
        bordercolor: "#e49ca6"
    },
    {
        name: "Blush Mode",
        background: "#fff0f0",
        text: "#c34d6b",
        bordercolor: "#e7a1ad"
    },
    {
        name: "Indigo Mode",
        background: "#e5e8f8",
        text: "#4a2c99",
        bordercolor: "#b3b9df"
    },
    {
        name: "Snow Mode",
        background: "#f5f5f5",
        text: "#808080",
        bordercolor: "#cccccc"
    },
    {
        name: "Charcoal Mode",
        background: "#333333",
        text: "#d1d1d1",
        bordercolor: "#808080"
    },
    {
        name: "Denim Mode",
        background: "#e4ebf4",
        text: "#3765a4",
        bordercolor: "#a2b8d8"
    },
    {
        name: "Amethyst Mode",
        background: "#f2e7f8",
        text: "#8a47b3",
        bordercolor: "#c6a8db"
    },
    {
        name: "Moss Mode",
        background: "#e4f2df",
        text: "#4a773c",
        bordercolor: "#b3d0a4"
    },
    {
        name: "Crimson Mode",
        background: "#ffe6e6",
        text: "#a32638",
        bordercolor: "#e68a8a"
    },
    {
        name: "Peach Mode",
        background: "#fff2e6",
        text: "#bf5c2e",
        bordercolor: "#e8c4a6"
    },
    {
        name: "Sand Mode",
        background: "#fdf6e4",
        text: "#8a6f46",
        bordercolor: "#d9c2a0"
    },
    {
        name: "Steel Mode",
        background: "#e3e3e6",
        text: "#474c5e",
        bordercolor: "#b0b4c1"
    }
];
