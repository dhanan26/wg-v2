
import { Stack, styled, Box, useMediaQuery, FormControlLabel, Grid } from "@mui/material";
import { borderLeft } from "@mui/system";
import { StyledSwitch } from "../common/switch";
import { PrimarySubText } from "../common/typographies/typographies"
import { Filter } from "../filters";
import { RecommendedSpecialties } from "../recommendedSpecialties";
import { EnquiryForm } from "../enquiryForm";


const MainContentContainer = styled((props) => (
    <Grid container {...props} />
))(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        paddingLeft: 16,
        paddingRight: 16
    },
    height: "100vh",
    paddingLeft: 80,
    paddingRight: 36
}));


const FilterContainer = styled((props) => (
    <Grid item {...props} md={2.5} sm={0} />
))(({ theme }) => ({
    paddingRight: 24,
    [theme.breakpoints.down('md')]: {
        paddingLeft: 10
    },
}));

const PartnerContainer = styled((props) => (
    <Grid item {...props} md={9.5} sm={12} xs={12} />
))(({ theme }) => ({
    backgroundColor: "red"
}));


const SortByContainer = styled(Box)(({ theme }) => ({
    height: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 10,
    margin: 20
}));


const VerticalLine = styled(Box)(({ theme }) => ({
    borderLeft: "1px solid black",
    height: 25
}));




const SortByText = styled(PrimarySubText)(({ theme }) => ({
    fontSize: 12,
}));








export const Content = () => {
    const isSmallScreen = useMediaQuery('(max-width:900px)');
    return (
        <MainContentContainer>
            {
                !isSmallScreen && <FilterContainer>
                    <Filter />
                </FilterContainer>
            }

            <PartnerContainer>
                <SortByContainer>
                    <SortByText variant="secondaryTitle" color={"textPrimary"} >Sort By</SortByText>
                    <VerticalLine />
                    <SortByText variant="secondaryTitle" color={"textPrimary"} >Price</SortByText>
                    <StyledSwitch defaultChecked />
                    <SortByText variant="secondaryTitle" color={"primary"} >Duration</SortByText>
                </SortByContainer>
                <RecommendedSpecialties />
                <EnquiryForm name="Hotel whatever from ShivajiNagar"/>

            </PartnerContainer>

        </MainContentContainer>
    )
}