import { Content } from "../../components/content";
import { ExploreExpert } from "../../components/expoloreExpert";
import { PopularPackage } from "../../components/popularPackage";
import { HappyCommunity } from "../../components/happyCommunity";

export const Home = () => {
  return (
    <>
      <PopularPackage />
      <ExploreExpert />
      <Content />
      <HappyCommunity />
    </>
  );
};
