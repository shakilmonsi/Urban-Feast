import HeroSection from "../../components/About/HeroSection";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div>
      <Helmet>
        <title> about </title>
      </Helmet>
      <HeroSection></HeroSection>
    </div>
  );
};

export default About;
