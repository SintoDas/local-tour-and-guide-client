import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import FAQSection from "../../components/FAQSection/FAQSection";
import AboutUs from "../AboutUs/AboutUs";
import LatestNews from "../../components/LatestNews/LatestNews";
import { Helmet } from "react-helmet-async";
import ReviewSection from "../Reviews/ReviewSection";

const Home = () => {
  return (
    <div className="py-5">
      <Helmet>
        <title> Local Tour and guid | Home</title>
      </Helmet>

      <Banner></Banner>

      <Services></Services>
      <LatestNews></LatestNews>

      <FAQSection></FAQSection>
      <ReviewSection></ReviewSection>
      <AboutUs></AboutUs>
    </div>
  );
};

export default Home;
