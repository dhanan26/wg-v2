import { Container, styled } from "@mui/material";


//Box

export const NavigationBox = styled(Box)(({ theme ,position}) => ({
    backgroundColor: theme.palette.primary.main,
    width: "auto",
    height: 30,
    display: "flex",
    justifyContent: position==="header"?"flex-end":"flex-start",
    alignItems: "center",
    '@media(max-width:600px)': {
        height: 20,
    }
}));

//Container

export const StyledBannerContainer = styled(Container)(({ theme }) => ({
    width: '100%',
    position:"relative",
    "&.MuiContainer-root":{
        paddingLeft:94,
        paddingRight:94
    }
}))
