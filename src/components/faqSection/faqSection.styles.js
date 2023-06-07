import { styled, Box, Typography } from "@mui/material";
import { PrimarySubText, PrimaryText } from "../common/typographies/typographies";

export const Container = styled(Box)(({ theme ,approchType}) => ({
  background: approchType==="Pain"? theme.palette.cardActive.main:theme.palette.wellnessColor.main,
  paddingBottom: "2rem",
  fontFamily: "'Aquawax', Courier, monospace;",
}));

export const TitleText = styled(PrimaryText)(({ theme }) => ({
  fontSize: "2.5rem",
  paddingTop: "1.344rem",
  paddingBottom: "0.625rem",
  fontFamily: "'Aquawax', Courier, monospace;",
  fontWeight: 500,
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.563rem",
  },
}));

export const SubtitleText = styled(PrimarySubText)(({ theme }) => ({
  fontFamily: "'Aquawax', Courier, monospace;",
  fontSize: "0.875rem",
  [theme.breakpoints.down("sm")]: {
    paddingLeft: "2rem",
    paddingRight: "2rem",
  },
}));

export const FaqContainer = styled(Box)(({ theme }) => ({
  paddingLeft: "10%",
  paddingRight: "10%",
  width: "calc(100% - 20%)",
  [theme.breakpoints.down("sm")]: {
    paddingLeft: "5%",
    paddingRight: "5%",
    width: "calc(100% - 10%)",
  },
}));

export const ReadMore = styled(Typography)(({ theme }) => ({
  color: theme.palette.buttonPrimary,
  marginTop: "1rem",
  display: "flex",
  gap: "0.2rem",
  justifyContent: "center",
  alignItems: "center",
  verticalAlign: "baseline",
}));

export const QuestionContainer = styled(Box)(() => ({
  paddingTop: "1.063rem",
  paddingBottom: "1.063rem",
  borderBottom: "1px solid #D9D9D9",
}));

export const QuestionTitleContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  cursor: "pointer",
}));

export const QuestionTitle = styled(Box)(({ theme }) => ({
  fontSize: "1rem",
  fontWeight: 300,
  color: theme.palette.textPrimary.main,
}));

export const QuestionAnswer = styled(Box)(({ theme }) => ({
  paddingTop: "1rem",
  fontSize: "1rem",
  fontWeight: 300,
  color: theme.palette.faqSection.answerColor,
}));
