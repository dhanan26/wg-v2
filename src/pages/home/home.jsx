import { Content } from "../../components/content";
import { ExploreExpert } from "../../components/expoloreExpert";
import { FaqSection } from "../../components/faqSection";
import { Footer } from "../../components/footer";
import { PopularPackage } from "../../components/popularPackage";
import { SuccessStories } from "../../components/successStories/successStories";

export const Home = () => {
  return (
    <>
      <PopularPackage />
      <ExploreExpert />
      <Content />
      <SuccessStories />
      <FaqSection />
      <Footer />
    </>
  );
};
