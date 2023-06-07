import { Content } from "../../components/content";
import { ExploreExpert } from "../../components/expoloreExpert";
import { FaqSection } from "../../components/faqSection";
import { Footer } from "../../components/layouts/footer";
import { PopularPackage } from "../../components/popularPackage";
import { SuccessStories } from "../../components/successStories/successStories";
import { HappyCommunity } from "../../components/happyCommunity";
import { WhyUS } from "../../components/whyUs";

import { ExpertSection } from "../../components/expertSection";
import { WhatToExpect } from "../../components/whatToExpect";
import { ApprovedTreatment } from "../../components/approvedTreatment";

import { SliderContainer } from "../../components/slider";
import { EmailValidation } from "../../components/emailValidation";
import { HowItWorks } from "../../components/howItWorks";
export const Home = () => {
  return (
    <>
      <PopularPackage />
      <ExploreExpert />
      <Content />
      <HappyCommunity />
      <SuccessStories />
      <ExpertSection />
      <WhyUS />
      <WhatToExpect />
      <ApprovedTreatment />
      <FaqSection />

      {/* <SliderContainer />
      <EmailValidation /> */}
      {/* <HowItWorks /> */}
    </>
  );
};

