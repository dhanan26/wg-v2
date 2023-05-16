import { Card, styled, CardContent, CardMedia, Box, Stack } from "@mui/material"
import cardImage from "../../../assets/images/popularPackage3.jpeg"
import { SecondaryButton } from "../../common/buttons/button"
import { PrimaryText,PrimarySubText } from "../../common/typographies/typographies"




const StyledPopularPackageCard = styled(Card)(({ theme,active }) => ({
    height: 339,
    width: 293,
    borderRadius: 2,
    boxShadow: 'none',
    backgroundColor:active?theme.palette.cardActive.main:"none",
    cursor:"pointer",
    [theme.breakpoints.down('mlg')]: {
        height:270,
        width:232
    },
}))


const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
    height: 218,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    [theme.breakpoints.down('mlg')]: {
        height:194,
    },
}))

const StyledCardContent = styled(CardContent)(({ theme }) => ({
    height: 100,
    [theme.breakpoints.down('mlg')]: {
        height:76,
    },
}))

const name = "Instant Back Pain Release"

const CardTitle = styled(PrimaryText)(({ theme }) => ({
    fontSize: 25,
    textAlign: "left",
    [theme.breakpoints.down('mlg')]: {
        fontSize: 20,
    },
}))

const CardSubText = styled(PrimarySubText)(({ theme }) => ({
    fontSize: 14,
    textAlign: "left",
    [theme.breakpoints.down('mlg')]: {
        fontSize: 10,
    },
}))

const StyledTitleBox = styled(Box)(({ theme }) => ({
    paddingTop: 3,
    paddingLeft: 1,
    display: "flex",
    flexDirection: "column",
    gap: 4,
    marginBottom: 20,
    [theme.breakpoints.down('mlg')]: {
        flexDirection: "row",
        marginBottom: 20
    },


}))

const CardMediaSubText = styled(PrimarySubText)(({ theme }) => ({
    fontSize: 10,
    textAlign: "left",
    [theme.breakpoints.down('mlg')]: {
        fontSize: 8,
    },
}))


const CardMediaButton = styled(SecondaryButton)(({ theme }) => ({
    width: 63,
    height: 28,
    fontSize: 12,
    [theme.breakpoints.down('mlg')]: {
        width: 55,
        height: 25,
    },
}))

const StyledStack = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    marginBottom: 20,
    marginLeft:5,
    marginRight:5,
    alignItems: "center",
    justifyContent:"space-between",
    [theme.breakpoints.down('mlg')]: {
        marginBottom: 40,
    },
}))




export const PopularPackageCard = ({active,data}) => {
    return (
        <StyledPopularPackageCard active={active} >
            <StyledCardContent>
                <StyledTitleBox  >
                    <CardTitle variant="primaryTitle" color="textPrimary" uppercase={"true"} >{data}</CardTitle>
                    <CardTitle variant="primaryTitle" color="textPrimary" uppercase={"true"} >Back Pain </CardTitle>
                </StyledTitleBox>
                <CardSubText variant="secondaryTitle" color="textPrimary"  >Multiple Session based Packages</CardSubText>
            </StyledCardContent>
            <StyledCardMedia image={cardImage} >
                <StyledStack  >
                    <CardMediaSubText variant="secondaryTitle" color="textSecondary"  >99 Experts | Starting from ₹ 1000</CardMediaSubText>
                    <CardMediaButton variant="contained" color="buttonPrimary" >+Explore</CardMediaButton>
                </StyledStack>

            </StyledCardMedia>
        </StyledPopularPackageCard>
    )
}


