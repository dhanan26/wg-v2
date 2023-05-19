import { Stack, styled, Box, useMediaQuery } from "@mui/material";
import { TextCenterBox } from "../common/containers/containers";
import { PrimaryText, PrimarySubText } from "../common/typographies/typographies";
import Grid from "@mui/material/Grid";
// import image1 from "../../assets/images/cardImage.jpeg";
const ApprovedTreatmentBox = styled(TextCenterBox)(({ theme }) => ({
  height: "auto",
  width: "auto",
  flexDirection: "column",
}));
const Title = styled(PrimaryText)(({ theme }) => ({
  fontSize: 40,
  paddingBottom: 10,
  paddingTop: 30,
  [theme.breakpoints.down("sm")]: {
    fontSize: 20,
    padding: "30px 16px 10px 16px",
  },
}));
const SubText = styled(PrimarySubText)(({ theme }) => ({
  textAlign: "center",
  paddingBottom: 20,
  [theme.breakpoints.down("sm")]: {
    padding: "0px 16px 20px 16px",
  },
}));
const ImageContainer = styled(Box)(({ theme }) => ({}));
const ImageBox = styled(Box)(({ theme }) => ({
  backgroundColor: "red",

  width: "auto",
  height: 227,
  [theme.breakpoints.down("sm")]: {
    height: 100,
    width: "auto",
  },
  [theme.breakpoints.down(400)]: {
    width: 250,
    height: 100,
    margin: 0,
    backgroundColor: "red",
  },
}));
const ImageBox2 = styled(Box)(({ theme }) => ({
  backgroundColor: "yellow",

  width: "auto",
  height: 227,
  [theme.breakpoints.down("sm")]: {
    height: 100,
    width: "auto",
  },
  [theme.breakpoints.down(400)]: {
    width: 250,
    height: 100,
    margin: 0,
    // backgroundColor: "red",
  },
}));
const ImageBox3 = styled(Box)(({ theme }) => ({
  backgroundColor: "green",

  width: "auto",
  height: 485,
  [theme.breakpoints.down("sm")]: {
    height: 100,
    width: "auto",
  },
  [theme.breakpoints.down(400)]: {
    width: 250,
    height: 100,
    margin: 0,
    // backgroundColor: "red",
  },
}));
const ImageContainerBox = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "calc(100% - 40%)",
  justifyContent: "center",
  marginTop: 20,
  marginLeft: "20%",
  marginRight: "20%",
  paddingBottom: 25,
  [theme.breakpoints.down("sm")]: {
    margin: 0,
    height: "100%",
    // backgroundColor: "blue",
  },
  [theme.breakpoints.down(400)]: {
    width: 250,
    height: "100%",
    margin: 0,
    // backgroundColor: "black",
  },
}));
export const ApprovedTreatment = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px) ");

  return (
    <ApprovedTreatmentBox>
      <Title variant="primaryTitle">Approved Treatment by Trusted Experts</Title>
      <SubText variant="secondaryText" color={"textPrimary"}>
        Lorem ipsum dolor sit amet consectetur. Senectus in etiam risus adipiscing risus arcu nullam quam.
      </SubText>
      <ImageContainerBox>
        {!isSmallScreen && (
          <Grid container columnSpacing={4} justifyContent="center" alignItems="center">
            <Grid item xs={4}>
              <Grid container rowSpacing={4}>
                <Grid item xs={12}>
                  <ImageBox />
                </Grid>
                <Grid item xs={12}>
                  <ImageBox2 />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={8}>
              <ImageBox3 />
            </Grid>
          </Grid>
        )}

        {isSmallScreen && (
          <Grid container justifyContent="center" alignItems="center" rowSpacing={4}>
            <Grid item xs={12}>
              <ImageBox />
            </Grid>
            <Grid item xs={12}>
              <ImageBox2 />
            </Grid>
            <Grid item xs={12}>
              <ImageBox3 />
            </Grid>
          </Grid>
        )}
      </ImageContainerBox>
    </ApprovedTreatmentBox>
  );
};
