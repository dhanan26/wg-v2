

import { StyledMainContainer } from "../../common/box/box"
import { Stack, styled, Box } from "@mui/material";

const BannerBox = styled(Box)(({ theme, image }) => ({
    backgroundColor: theme.palette.primary.main,
    width: "auto",
    height: 416,
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: 'center',
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
    '@media(max-width:600px)': {
        height: 243,
    },
    justifyContent: "center",
    position: "relative"
}));





export const Banner = ({bannerData})=>{
    return(
        <StyledMainContainer>
            <BannerBox image={bannerData}>
                

            </BannerBox>

        </StyledMainContainer>
    )
}