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
    }
]

export const art = [
    {
        name: '"Sahil Sian", Sahil Sian, Graphite, 2023',
        description: "Self Portrait of Sahil Sian. Graphite on vellum bristol paper.",
        image: "https://i.imgur.com/AtLVUFT.jpeg",
        alt: "Sahil Sian self portrait drawing",
        video: false
    },
    {
        name: 'Playstation Controller Study, Sahil Sian, Vector Graphics, 2021',
        description: "Hyper realistic play station controller created using vector graphics. Scallable for all sizes.",
        image: "https://i.imgur.com/R01yyRw.jpeg",
        alt: "Vector graphics play station controller",
        video: false
    },
    {
        name: '"Bridgewater, NS", Sahil Sian, Graphite, 2024',
        description: "Drawing a rainy day on a townside of Nova Scotia.",
        image: "https://i.imgur.com/Ogkks0d.jpeg",
        alt: "Drawing a rainy day on a townside of Nova Scotia.",
        video: false
    },
    {
        name: '"War and Remembrance", Sahil Sian, Graphite, 2019',
        description: "Competition piece for 2019 National Youth Remembrance Contest Canada.",
        image: "https://i.imgur.com/0HKbGNL.jpeg",
        alt: "Drawing of an older veteran in remembrance of his past.",
        video: false
    },
    {
        name: '"The Proms", Sahil Sian, Digital, 2020',
        description: "Poster Design in Serif & Sans Serif utilizing all Adobe Illustrator type features.",
        image: "https://i.imgur.com/qkhEETa.png",
        alt: "Poster Design",
        video: false
    }
    ,
    {
        name: '"Bus", Sahil Sian, Motion Graphics, 2020',
        description: "Moving bus motion graphics using Illustrator and After Effects.",
        image: "https://i.imgur.com/CxzMc5Q.gif",
        alt: "Motion graphics of a moving bus.",
        video: true
    }
    ,
    {
        name: '"Explorer India", Sahil Sian, Motion Graphic, 2020',
        description: "Fun little motion graphics project made to represent some aspects of India.",
        image: "https://i.imgur.com/Q1IkJP9.gif",
        alt: "Drawing of an older veteran in remembrance of his past.",
        video: false
    },
    {
        name: '"Veginner Web App", Sahil Sian, Graphite, 2021',
        description: "Find recipes based off of your food preferences!",
        image: "https://i.imgur.com/uKMguY0.png",
        alt: "Drawing of an older veteran in remembrance of his past.",
        video: false
    }
]

export const ProductUI = [
    {
        name: 'Dismegle App',
        description: "Branding and marketing for the Dismegle discord community. Developed a marketing strategy that grew Dismegle to 100,000 users.",
        image: "https://i.imgur.com/BfpnRJU.png",
        alt: "Dismegle Logo"
    },
    {
        name: 'Estate Lynx Branding & UI',
        description: "Branding and UI for Red Bull Canada Basement winners, Estate Lynx.",
        image: "https://i.imgur.com/JE3RbNL.png",
        alt: "UX/UI Design for Estate Lynx"
    },
    {
        name: 'Rec N Roll Website Design & Development',
        description: "Website Design and Development for Rec N Roll, a family event center in Cambelton, NB.",
        image: "https://i.imgur.com/CZVqwyh.png",
        alt: "Image of Wireframes"
    },
    {
        name: 'Elephant App. Research, Design & Frontend Development',
        description: "Elephant is an application intented to connect individuals with intellectual disabilities with specialized educators. Application research, design & development.",
        image: "https://i.imgur.com/pLtj5ie.png",
        alt: "Slide from app presentation deck."
    },
    
    {
        name: '"Car Renting App", Sahil Sian, Mobile Application, 2023',
        description: "Designed & Developed the front-end for authentication, verification, vehicle selection, payments, and lockbox fulfillment. Handled all HTTP status codes for 23 API endpoints with appropriate in-app state updates",
        image: "https://i.imgur.com/MGTz6sT.gif",
        alt: "Car renting app gif.",
        video: false
    }
    ,
    {
        name: '"Unfinished", Sahil Sian, Mobile Application, 2025',
        description: "Designed & Developed the front-end for unfinished. Won second placed in the 2025 Gen AI + Mental Health Hackathon at Dalhousie University.",
        image: "https://i.imgur.com/E5xQJP1.gif",
        alt: "Mental health app gif.",
        video: false
    },
    {
        name: '"Nextjs Headless WordPress App with React and WPGraphQL", Sahil Sian, Web Application, 2024',
        description: "Developed a WordPress app using React, Nextjs and WP GraphQL. Builds highly optimized WordPress websites fast using a dynamic component library that includes 12 layout components and 25 compound components.",
        image: "https://i.imgur.com/aWWgnsv.png",
        alt: "Image explaining selling points on my react/wpgraphql app",
        video: false
    },
    {
        name: '"Veginner Web App", Sahil Sian, Web Application, 2021',
        description: "Find recipes based off of your food preferences!",
        image: "https://i.imgur.com/uKMguY0.png",
        alt: "Drawing of an older veteran in remembrance of his past.",
        video: false
    },
]

export const themes = [
    {
        name: "Default",
        background: "#FFFFFF",
        text: "#000000",
        bordercolor: "#e6e9eb"
    },
    {
        name: "Sleepy Time",
        background: "#000000",
        text: "#FFFFFF",
        bordercolor: "#c0c2c2"
    },
    {
        name: "Pink",
        background: "#ffecff",
        text: "#ee62dd",
        bordercolor: "#e3c5de"
    },
    {
        name: "havarti",
        background: "#F0E6B3",
        text: "#E25423",
        bordercolor: "#E25423"
    },
    {
        name: "Vegan Mode",
        background: "#e9f7e1",
        text: "#329932",
        bordercolor: "#a8d5a1"
    },
    {
        name: "Butter",
        background: "#fef6e4",
        text: "#cc7722",
        bordercolor: "#f5cd9b"
    },
    {
        name: "Doom",
        background: "#8b1d21",
        text: "#f5f09b",
        bordercolor: "#f9f5f3"
    },
    {
        name: "Lavender Farm",
        background: "#d8a7de",
        text: "#191234",
        bordercolor: "#FFFFFF"
    },
    {
        name: "Watching the Sunset",
        background: "#ffd5c2",
        text: "#b3422a",
        bordercolor: "#f5a58e"
    },
    {
        name: "Radiohead",
        background: "#1a1a2e",
        text: "#ffffff",
        bordercolor: "#282848"
    },
    {
        name: "Berserk",
        background: "#c21c25",
        text: "#1a0605",
        bordercolor: "#200405"
    },
    {
        name: "Wine",
        background: "#f9e8f8",
        text: "#812f67",
        bordercolor: "#d89ec9"
    },
    {
        name: "Potato Salad",
        background: "#fff3e2",
        text: "#b96d12",
        bordercolor: "#f5c27d"
    }
];
