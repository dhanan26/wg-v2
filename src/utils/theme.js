import "../index.css";

import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#69C6AC", // Medium Aquamarine
            contrastText: '#FFFFFF',
        },
        secondary: {
            main: "#00256D", //Cool Black 
            darker: "rgba(0, 37, 109, 1)"
        },
        buttonPrimary: {
            main: "#F67D6D", //Salmon 
            contrastText: '#FFFFFF',
        },
        buttonSecondary: {
            main: "#0187A4", //Pain color 
            contrastText: '#FFFFFF',
        },
        headerButtonPrimary: {
            main: "#5E8BFF" //naplesYellow
        },
        headerButtonSecondary: {
            main: "#EBECF0",//Bright Gray ,
            contrastText: '#333333',
        },
        headerButtonMain: {
            main: "#FFD25E",
            contrastText: '#333333',
        },
        textPrimary: {
            main: "#333333" //Black
        },
        textSecondary: {
            main: "#FFFFFF", //White
            contrast: "#757D8A",
        },
        cardActive: {
            main: "#E3EDFC"
        },
        painColor:{
            main: "#0187A4",
            contrastText: '#FFFFFF',
        },
        faqSection: {
            background: '#eaf0fc',
            answerColor: "#9695b2"
        },
        expertColor: {
            main: "#ACE6CF",
        },
        avatar: {
            borderColor: '#16BE48',
        },
        packageCard: {
            exp: "#4A4A4A",
            line: "#999999",
            button: "#00256D"
        },
        tabSection: {
            background: '#F2F2F2',
        },
        packageInfo: {
            chipColor: "#16BE48"
        }
    },
    typography: {
        primaryTitle: {
            fontFamily: "Aquawax",
            fontWeight: 500,
            fontSize: 40,
        },
        secondaryTitle: {
            fontFamily: "Poppins",
            fontWeight: 600,
            fontSize: 32,
        },
        primaryText: {
            fontFamily: "Inter",
            fontWeight: 400,
            fontSize: 16
        },
        secondaryText: {
            fontFamily: "Rubik",
            fontWeight: 400,
            fontSize: 10
        }
    },
    fontFamily: {
        primary: "Aquawax",
        secondary: "Poppins",
        Rubik: "Rubik",
        Inter:"Inter"
    },
    breakpoints: {
        values: {
            xs: 390,
            sm: 600,
            md: 900,
            smd:800,//custom
            lg: 1200,
            mlg:1400,//custom
            xl: 1536,
        },
    },
})