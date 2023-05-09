import { Box, styled } from "@mui/material";




//Container

export const StyledBannerContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    position: "relative",
    paddingLeft: 94,
    paddingRight: 94
}))

export const NavigationContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    display: "flex",
    flexDirection: "row",
    paddingLeft: 50,
    paddingRight: 50,
    [theme.breakpoints.down('lg')]:{
        paddingLeft:80,
        paddingRight:80,
    },
    [theme.breakpoints.down('md')]:{
        paddingLeft:70,
        paddingRight:70,
    },
    [theme.breakpoints.down('sm')]:{
        paddingLeft:10,
        paddingRight:16,
    }
}))

