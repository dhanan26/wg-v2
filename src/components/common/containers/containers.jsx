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
        paddingLeft:60,
        paddingRight:60,
    },
    [theme.breakpoints.down('sm')]:{
        paddingLeft:10,
        paddingRight:16,
    }
}))

export const TextCenterBox = styled((Box))(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}))

