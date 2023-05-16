
import { styled, Box, } from "@mui/material";
import { TextCenterBox } from "../../common/containers/containers";
import { PrimarySubText, PrimaryText } from "../../common/typographies/typographies";
import RecommendedSpecialtiesImg from "../../../assets/images/recommended_specialties.jpg"
import { Icon } from "../../common/icon/icon";
import TimeIcon from "../../../assets/icons/TimeIcon.svg"
import AyurvedaIcon from "../../../assets/icons/ayurveda.svg"


const StyledSpecialtiesCard = styled(Box)(({ theme }) => ({
    height: 103,
    width: 251,
    display: "flex",
    flexDirection: "row",
    borderBottom:"5px solid green",
    borderTop:"1px solid green",
    borderRight:"1px solid green",
}));

const SpecialtiesImage = styled(TextCenterBox)(({ theme, image }) => ({
    height: 103,
    width: 81,
    backgroundImage: `url(${RecommendedSpecialtiesImg})`,
    backgroundSize: "cover",
    backgroundPosition: 'center',
    backgroundRepeat: "no-repeat",
}));

const SpecialtiesContent = styled(Box)(({ theme }) => ({
    height: 103,
    width: 170,
    backgroundColor:theme.palette.textSecondary.main,
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-evenly"
}));

const SpecialtiesTextBox = styled(Box)(({ theme }) => ({
    display:"flex",
    flexDirection:"column",
    gap:5,
    paddingLeft:7,
    paddingTop:16
}));


const SpecialtiesMainText = styled(PrimarySubText)(({ theme }) => ({
    fontWeight: 500,
    textAlign:"left"
}));

const SpecialtiesSubText = styled(PrimarySubText)(({ theme }) => ({
    fontSize: 10,
    fontWeight: 400,
    fontFamily: theme.fontFamily.Rubik,
    textAlign:"left",
}));


const SpecialtiesFooter = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop:20
}));


const SpecialtiesFooterText= styled(Box)(({ theme }) => ({
    margin:5,
    display: "flex",
    flexDirection: "row",
    gap:2
}));






export const RecommendedSpecialtiesCard = () => {
    return (
        <StyledSpecialtiesCard>
            <SpecialtiesImage>
                <Icon src={AyurvedaIcon} className="recommended_specialties_icon" />
            </SpecialtiesImage>
            <SpecialtiesContent>
                <SpecialtiesTextBox>
                    <SpecialtiesMainText variant="primaryTitle" color="textPrimary">Naturopathy</SpecialtiesMainText>
                    <SpecialtiesSubText color="textPrimary" >Traditional Medicine</SpecialtiesSubText>
                </SpecialtiesTextBox>
                <SpecialtiesFooter>
                    <SpecialtiesFooterText>
                    <Icon src={TimeIcon} className="timeIcon" /> 
                    <SpecialtiesSubText  color="textPrimary" >15</SpecialtiesSubText>
                    <SpecialtiesSubText  color="textPrimary" >mins</SpecialtiesSubText>
                    </SpecialtiesFooterText>
                    <SpecialtiesFooterText>
                    <SpecialtiesSubText  color="textPrimary" >How it works</SpecialtiesSubText>
                    </SpecialtiesFooterText>

                </SpecialtiesFooter>
            </SpecialtiesContent>
        </StyledSpecialtiesCard>
    )
}