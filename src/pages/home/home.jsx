import { Content } from "../../components/content";
import { ExploreExpert } from "../../components/expoloreExpert";
import { FaqSection } from "../../components/faqSection";
import { Footer } from "../../components/footer";
import { PopularPackage } from "../../components/popularPackage";
import { SuccessStories } from "../../components/successStories/successStories";
import { HappyCommunity } from "../../components/happyCommunity";
import { WhyUS } from "../../components/whyUs";

export const Home = () => {
  return (
    <>
      <PopularPackage />
      <ExploreExpert />
      <Content />
           <HappyCommunity />
      <SuccessStories />

      <WhyUS />
      <FaqSection />
      <Footer />
    </>
  );
};
