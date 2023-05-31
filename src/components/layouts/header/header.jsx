import { Icon } from "../../common/icon/icon";
import {
  Stack,
  styled,
  useMediaQuery,
  Typography,
  useTheme,
  Modal,
  Box,
  TextField,
  Drawer,
  Button,
} from "@mui/material";
import { PrimarySubText } from "../../common/typographies/typographies";
import { Banner } from "../../banner";
import banner2Imag from "../../../assets/images/home_carousel_2.png.jpg";
import { Menu } from "../../menu";
//icons
import globIcon from "../../../assets/icons/Glob.svg";
import wellnessLogo from "../../../assets/images/headerLogo.svg";
import locationIcon from "../../../assets/icons/Location.svg";
import headSetIconWhite from "../../../assets/icons/headSetWhite.svg";

import {
  MainNavigationBox,
  TopNavigationBox,
  MainNavigationContainer,
  TopNavigationContainer,
  GetInTouchButtonHeader,
  MainHeaderText,
} from "./header.styles";

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
  );
};

const TopHeaderItems = () => {
  return (
    <TopNavigationContainer>
      <Stack direction={"row"} spacing={1}>
        <Stack direction={"row"} spacing={0.5}>
          <Icon src={globIcon} className={"header_icon"} />
          <PrimarySubText variant="primaryTitle" color={"textSecondary"}>
            English
          </PrimarySubText>
        </Stack>
        <Stack direction={"row"} spacing={0.5}>
          <Icon src={locationIcon} className={"header_icon"} />
          <PrimarySubText variant="primaryTitle" color={"textSecondary"}>
            India
          </PrimarySubText>
        </Stack>
      </Stack>
    </TopNavigationContainer>
  );
};

const MainHeaderItems = () => {
  const isSmallScreen = useMediaQuery("(max-width:1200px)");
  const theme = useTheme();
  console.log(theme, "theme");

  return (
    <MainNavigationContainer>
      <Icon src={wellnessLogo} className="wellness_garden_icon" />
      {isSmallScreen ? (
        <>
          <Menu />
        </>
      ) : (
        <Stack direction={"row"} spacing={"48px"} display="flex" alignItems={"center"}>
          <MainHeaderText>Pain Program</MainHeaderText>
          <MainHeaderText>Wellness Program</MainHeaderText>
          <MainHeaderText>Blog</MainHeaderText>
          <MainHeaderText>Our Story</MainHeaderText>
          <GetInTouchButtonHeader
            variant="contained"
            color="buttonPrimary"
            startIcon={<Icon src={headSetIconWhite} className={"header_icon"} />}
          >
            Get in touch{" "}
          </GetInTouchButtonHeader>
        </Stack>
      )}
    </MainNavigationContainer>
  );
};
