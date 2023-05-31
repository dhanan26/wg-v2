import questions from "./faqQuestions.json";

import closeIcon from "../../assets/icons/greenClose.svg";
import arrowRight from "../../assets/icons/ArrowRight.svg";

import { Box, Collapse, Typography, styled } from "@mui/material";
import { PrimaryText, PrimarySubText, AnchorText } from "../common/typographies/typographies";
import { useState } from "react";

import {
  Container,
  TitleText,
  SubtitleText,
  FaqContainer,
  ReadMore,
  QuestionContainer,
  QuestionTitleContainer,
  QuestionTitle,
  QuestionAnswer,
} from "./faqSection.styles";

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
          return <FaqQuestion key={_index} qna={_each} id={_index} />;
        })}

        {/* Read more/less */}
        {questions?.questions?.length > 5 && (
          <ReadMore onClick={() => setShowMore((prev) => !prev)} id="faq-section-read-more">
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
            return <FaqQuestion key={_index} qna={_each} id={_index} />;
          })}
        </Collapse>
      </FaqContainer>
    </Container>
  );
};

const FaqQuestion = ({ qna, id }) => {
  const [open, setIsOpen] = useState(false);
  return (
    <QuestionContainer id={`faq-${id}-parent`}>
      <QuestionTitleContainer id={`faq-${id}-clickable`} onClick={() => setIsOpen((prev) => !prev)}>
        <QuestionTitle>{qna.question}</QuestionTitle>
        <img src={closeIcon} style={{ height: 24, width: 24 }} />
      </QuestionTitleContainer>
      <Collapse in={open} timeout={"auto"}>
        <QuestionAnswer id={`faq-${id}-answer`}>
          {qna.answer.map((_each, _index) => {
            let key = Object.keys(_each)[0];
            return <RenderJson key={_index} type={key} content={_each[key]} parentId={id} id={_index} />;
          })}
        </QuestionAnswer>
      </Collapse>
    </QuestionContainer>
  );
};

const RenderJson = ({ type, content, parentId, id }) => {
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
    return (
      <AnchorText id={`faq-${parentId}-${id}-link`} href={content?.href}>
        {content?.a}
      </AnchorText>
    );
  } else if (type === "custom_a") {
    return (
      <p>
        {content?.p}{" "}
        <AnchorText id={`faq-${parentId}-${id}-link`} href={content?.href}>
          {content?.a}
        </AnchorText>
      </p>
    );
  }
};
