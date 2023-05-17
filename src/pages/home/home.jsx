import { Content } from "../../components/content";
import { ExploreExpert } from "../../components/expoloreExpert";
import { FaqSection } from "../../components/faqSection";
import { Footer } from "../../components/footer";
import { PopularPackage } from "../../components/popularPackage";

export const Home = () => {
  return (
    <>
      <PopularPackage />
      <ExploreExpert />
      <Content />
      <FaqSection />
      <Footer />
    </>
  );
};
