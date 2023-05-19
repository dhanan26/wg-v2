import { Stack, styled, Box } from "@mui/material";
import { GetInTouchButton, SecondaryButton } from "../common/buttons/button";
import { TextCenterBox } from "../common/containers/containers";
import { PrimarySubText, PrimaryText } from "../common/typographies/typographies";

import { Icon } from "../common/icon/icon";
import headSetIconWhite from "../../assets/icons/headSetWhite.svg";
import { ExpertDropdown } from "../common/dropdowns/dropdowns";

const ExploreExpertBox = styled(TextCenterBox)(({ theme }) => ({
    minHeight: 180,
    backgroundColor: theme.palette.cardActive.main,
    flexDirection: "column",
    padding: "1rem 0 1rem 0",
    justifyContent: "space-evenly",
}));

const Title = styled(PrimaryText)(({ theme }) => ({
    fontSize: 30,
    [theme.breakpoints.down("smd")]: {
        fontSize: 25,
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: 20,
    },
}));

const InputContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "14px",
    marginTop: 20,
    [theme.breakpoints.down(365)]: {
        flexDirection: "column",
        alignItems: "center",
    },
}));

const ButtonContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    gap: "14px",
    marginTop: 48,
    [theme.breakpoints.down("smd")]: {
        marginTop: 0,
    },
    [theme.breakpoints.down(365)]: {
        flexDirection: "column",
        alignItems: "center",
    },
}));

const MainContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    gap: "14px",
    [theme.breakpoints.down("smd")]: {
        flexDirection: "column",
    },
}));

const GetInTouchButtonExplore = styled(GetInTouchButton)(({ theme }) => ({
    width: 176,
    height: 42,
    [theme.breakpoints.down("smd")]: {
        width: 207,
    },
    [theme.breakpoints.down("sm")]: {
        width: 176,
    },
}));

const SearchButton = styled(SecondaryButton)(({ theme }) => ({
    width: 114,
    height: 42,
    [theme.breakpoints.down("smd")]: {
        width: 207,
    },
    [theme.breakpoints.down("sm")]: {
        width: 176,
    },
}));

const DropDownTitleBox = styled(TextCenterBox)(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
        justifyContent: "flex-start",
        width: "100%",
    },
}));

const DropDownTitle = styled(PrimarySubText)(({ theme }) => ({
    marginBottom: 10,
    color: theme.palette.textPrimary.main,
    fontFamily: theme.fontFamily.secondary,
    fontWeight: 400,
    fontSize: 14,
    [theme.breakpoints.down("sm")]: {
        marginBottom: 0,
    },
}));

const gender = ["male", "female", "others"];

const ExploreDropdownBox = ({ placeholder, label }) => {
    return (
        <Stack>
            <DropDownTitleBox>
                <DropDownTitle>{label}</DropDownTitle>
            </DropDownTitleBox>
            <ExpertDropdown items={gender} placeholder={placeholder} />
        </Stack>
    );
};

export const ExploreExpert = () => {
    return (
        <ExploreExpertBox>
            <Title variant='primaryTitle' color='secondary'>
                Explore Experts For Upper Back Treatment
            </Title>
            <MainContainer>
                <InputContainer>
                    <ExploreDropdownBox placeholder={"select age"} label={"Age"} />
                    <ExploreDropdownBox placeholder={"select age"} label={"Gender"} />
                </InputContainer>
                <ButtonContainer>
                    <SearchButton variant='contained' color='buttonSecondary'>
                        Search
                    </SearchButton>
                    <GetInTouchButtonExplore variant='contained' color='buttonPrimary' startIcon={<Icon src={headSetIconWhite} className={"header_icon"} />}>
                        Get in touch
                    </GetInTouchButtonExplore>
                </ButtonContainer>
            </MainContainer>
        </ExploreExpertBox>
    );
};
