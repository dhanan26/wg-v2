import { useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Grid";
import {
  ApprovedTreatmentBox,
  Title,
  SubText,
  ImageBox,
  ImageBox2,
  ImageBox3,
  ImageContainerBox,
} from "./approvedTreatment.styles";

import { useContext } from "react";
import { MainContext } from "../../pages/main/main";

export const ApprovedTreatment = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px) ");
  const {programData} = useContext(MainContext);

  const programImageData = programData?.programFooterAndLogo
  console.log("🚀 ~ file: approvedTreatment.jsx:21 ~ ApprovedTreatment ~ programImageData:", programImageData)

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
              <ImageBox3 image={programImageData?.webFooterUrl?.previewUrl} />
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
              <ImageBox3 image={programImageData?.mobileFooterUrl?.previewUrl} />
            </Grid>
          </Grid>
        )}
      </ImageContainerBox>
    </ApprovedTreatmentBox>
  );
};
