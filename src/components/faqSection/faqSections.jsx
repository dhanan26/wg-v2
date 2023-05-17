import questions from "./faqQuestions.json";

import closeIcon from "../../assets/icons/greenClose.svg";
import arrowRight from "../../assets/icons/ArrowRight.svg";

import { Box, Collapse, Typography, styled } from "@mui/material";
import { PrimaryText, PrimarySubText, AnchorText } from "../common/typographies/typographies";
import { useState } from "react";

const Container = styled(Box)(() => ({
  background: "#eaf0fc",
  paddingBottom: "2rem",
  fontFamily: "'Aquawax', Courier, monospace;",
}));

const TitleText = styled(PrimaryText)(({ theme }) => ({
  fontSize: "2.5rem",
  paddingTop: "1.344rem",
  paddingBottom: "0.625rem",
  fontFamily: "'Aquawax', Courier, monospace;",
  fontWeight: 500,
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.563rem",
  },
}));

const SubtitleText = styled(PrimarySubText)(({ theme }) => ({
  fontFamily: "'Aquawax', Courier, monospace;",
  fontSize: "0.875rem",
  [theme.breakpoints.down("sm")]: {
    paddingLeft: "2rem",
    paddingRight: "2rem",
  },
}));

const FaqContainer = styled(Box)(({ theme }) => ({
  paddingLeft: "10%",
  paddingRight: "10%",
  width: "calc(100% - 20%)",
  [theme.breakpoints.down("sm")]: {
    paddingLeft: "5%",
    paddingRight: "5%",
    width: "calc(100% - 10%)",
  },
}));

const ReadMore = styled(Typography)(() => ({
  color: "#F67D6D",
  marginTop: "1rem",
  display: "flex",
  gap: "0.2rem",
  justifyContent: "center",
  alignItems: "center",
  verticalAlign: "baseline",
}));

export const FaqSection = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <Container>
      <TitleText>Frequently Asked Questions</TitleText>
      <SubtitleText color={"textPrimary"}>
        Questions from our users, specialists & health practitioners in the field
      </SubtitleText>
      <FaqContainer>
        {/* collapse for first 5 */}
        {questions?.questions?.map((_each, _index) => {
          if (_index > 5) return;
          return <FaqQuestion key={_index} qna={_each} />;
        })}

        {/* Read more/less */}
        {questions?.questions?.length > 5 && (
          <ReadMore onClick={() => setShowMore((prev) => !prev)}>
            <img
              src={arrowRight}
              style={{ height: 12, transform: showMore ? "rotate(-90deg)" : "none", transition: "200ms linear" }}
            />
            Read {showMore ? "Less" : "More"}
          </ReadMore>
        )}

        {/* collapse for remaining */}
        <Collapse in={showMore}>
          {questions?.questions?.map((_each, _index) => {
            if (_index < 5) return;
            return <FaqQuestion key={_index} qna={_each} />;
          })}
        </Collapse>
      </FaqContainer>
    </Container>
  );
};

const QuestionContainer = styled(Box)(() => ({
  paddingTop: "1.063rem",
  paddingBottom: "1.063rem",
  borderBottom: "1px solid #D9D9D9",
}));

const QuestionTitleContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  cursor: "pointer",
}));
const QuestionTitle = styled(Box)(() => ({
  fontSize: "1rem",
  fontWeight: 300,
  color: "#333333",
}));
const QuestionAnswer = styled(Box)(() => ({
  paddingTop: "1rem",
  fontSize: "1rem",
  fontWeight: 300,
  color: "#9695b2",
}));

const FaqQuestion = ({ qna }) => {
  const [open, setIsOpen] = useState(false);
  return (
    <QuestionContainer>
      <QuestionTitleContainer onClick={() => setIsOpen((prev) => !prev)}>
        <QuestionTitle>{qna.question}</QuestionTitle>
        <img src={closeIcon} style={{ height: 24, width: 24 }} />
      </QuestionTitleContainer>
      <Collapse in={open} timeout={"auto"}>
        <QuestionAnswer>
          {qna.answer.map((_each, _index) => {
            let key = Object.keys(_each)[0];
            return <RenderJson key={_index} type={key} content={_each[key]} />;
          })}
        </QuestionAnswer>
      </Collapse>
    </QuestionContainer>
  );
};

const RenderJson = ({ type, content }) => {
  if (type === "p") {
    return <p>{content}</p>;
  } else if (type === "ul") {
    return (
      <ul>
        {content.map((_each, _index) => {
          return <li key={_index}>{_each}</li>;
        })}
      </ul>
    );
  } else if (type === "a") {
    return <AnchorText href={content?.href}>{content?.a}</AnchorText>;
  } else if (type === "custom_a") {
    return (
      <p>
        {content?.p} <AnchorText href={content?.href}>{content?.a}</AnchorText>
      </p>
    );
  }
};
