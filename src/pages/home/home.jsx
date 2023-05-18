import { Content } from "../../components/content";
import { ExploreExpert } from "../../components/expoloreExpert";
import { PopularPackage } from "../../components/popularPackage";
import { HappyCommunity } from "../../components/happyCommunity";
import { WhyUS } from "../../components/whyUs";

export const Home = () => {
  return (
    <>
      <PopularPackage />
      <ExploreExpert />
      {/* <Content /> */}
      <HappyCommunity />
      <WhyUS />
    </>
  );
};
