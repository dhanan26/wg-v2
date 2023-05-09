import { Box, styled } from "@mui/material";

//Box
export const NavigationBox = styled(Box)(({ theme, position }) => ({
    backgroundColor: theme.palette.primary.main,
    width: "auto",
    height: 30,
    display: "flex",
    alignItems: "center",
}));

export const StyledMainContainer = styled(Box)(({ theme, position }) => ({
    paddingLeft: 94,
    paddingRight: 94,
    [theme.breakpoints.down('lg')]:{
        paddingLeft:80,
        paddingRight:80,
    },
    [theme.breakpoints.down('md')]:{
        paddingLeft:60,
        paddingRight:60,
    },
    [theme.breakpoints.down('sm')]:{
        paddingLeft:16,
        paddingRight:16,
    }
}));