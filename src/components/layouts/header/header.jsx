import { NavigationBox } from "../../common/box/box"

import { Icon } from "../../common/icon/icon"
import { Stack, styled, Box, useMediaQuery,Typography ,useTheme} from "@mui/material";
import { NavigationContainer } from "../../common/containers/containers";
import { PrimarySubText } from "../../common/typographies/typographies";
import { GetInTouchButton, SecondaryButton } from "../../common/buttons/button"
import { Banner } from "../../banner"
import banner2Imag from '../../../assets/images/home_carousel_2.png.jpg'

//icons
import globIcon from "../../../assets/icons/Glob.svg"
import wellnessLogo from "../../../assets/images/headerLogo.svg"
import locationIcon from "../../../assets/icons/Location.svg"
import headSetIconWhite from "../../../assets/icons/headSetWhite.svg"
import MenuSharpIcon from '@mui/icons-material/MenuSharp';


const MainNavigationBox = styled(NavigationBox)(({ theme, position }) => ({
    height: 84,
    backgroundColor: "white",
    alignItems: "none"
}));

const TopNavigationBox = styled(NavigationBox)(({ theme, position }) => ({
    '@media(max-width:600px)': {
        height: 20,
    }
}));

const MainNavigationContainer = styled(NavigationContainer)(({ theme, position }) => ({
    justifyContent: "space-between",
    alignItems: "center",
    ".MuiContainer-root": {
        paddingLeft: 0,
    },
}));

const TopNavigationContainer = styled(NavigationContainer)(({ theme, position }) => ({
    justifyContent: "flex-end",
    '@media(max-width:1200px)': {
        justifyContent: "center",
    }


}));

const GetInTouchButtonHeader = styled(GetInTouchButton)(({ theme, position }) => ({
  
    height: 54,
    width: 160,
}));


const MainHeaderText = styled(Typography)(({ theme, position }) => ({
    fontSize: 15,
    cursor:"pointer",
    fontFamily:theme.fontFamily.Rubik
}));




export const Header = () => {
    return (
        <>
            <TopNavigationBox>
                <TopHeaderItems />
            </TopNavigationBox>
            <MainNavigationBox>
                <MainHeaderItems />
            </MainNavigationBox>
            <Banner bannerData={banner2Imag} />
        </>
    )
}



const TopHeaderItems = () => {
    return (
        <TopNavigationContainer  >
            <Stack direction={"row"} spacing={1} >
                <Stack direction={"row"} spacing={0.5} >
                    <Icon src={globIcon} className={"header_icon"} />
                    <PrimarySubText variant="primaryTitle" color={"textSecondary"} >English</PrimarySubText>
                </Stack>
                <Stack direction={"row"} spacing={0.5} >
                    <Icon src={locationIcon} className={"header_icon"} />
                    <PrimarySubText variant="primaryTitle" color={"textSecondary"} >India</PrimarySubText>
                </Stack>

            </Stack>
        </TopNavigationContainer>
    )
}


const MainHeaderItems = () => {
    const isSmallScreen = useMediaQuery('(max-width:1200px)');
    const theme = useTheme()
    console.log(theme,"theme")
    return (
        <MainNavigationContainer >
            <Icon src={wellnessLogo} className="wellness_garden_icon" />
            {
                isSmallScreen ?
                    <MenuSharpIcon/>:
                <Stack direction={"row"} spacing={"48px"} display="flex" alignItems={"center"} >
                <MainHeaderText  >Pain Program</MainHeaderText>
                <MainHeaderText >Wellness Program</MainHeaderText>
                <MainHeaderText >Blog</MainHeaderText>
                <MainHeaderText >Our Story</MainHeaderText>
                <GetInTouchButtonHeader variant="contained" color="buttonPrimary" startIcon={<Icon src={headSetIconWhite} className={"header_icon"} />} >Get in touch </GetInTouchButtonHeader>
            </Stack>
            }
        </MainNavigationContainer>
    )
}