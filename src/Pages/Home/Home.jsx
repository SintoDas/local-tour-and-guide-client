import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import FAQSection from "../../components/FAQSection/FAQSection";
import AboutUs from "../AboutUs/AboutUs";
import LatestNews from "../../components/LatestNews/LatestNews";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div className="py-5">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Local Tours and Guide</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <Banner></Banner>

      <Services></Services>
      <LatestNews></LatestNews>

      <FAQSection></FAQSection>
      <AboutUs></AboutUs>
    </div>
  );
};

export default Home;
