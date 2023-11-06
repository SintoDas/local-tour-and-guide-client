import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import FAQSection from "../../components/FAQSection/FAQSection";
import AboutUs from "../AboutUs/AboutUs";
import LatestNews from "../../components/LatestNews/LatestNews";

const Home = () => {
  return (
    <div className="py-5">
      <Banner></Banner>
      <Services></Services>
      <LatestNews></LatestNews>

      <FAQSection></FAQSection>
      <AboutUs></AboutUs>
    </div>
  );
};

export default Home;
