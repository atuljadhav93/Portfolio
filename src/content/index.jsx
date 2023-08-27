import HeroSection from "../component/HeroSection";
import AboutMe from "../component/AboutMe";
import Timeline from "../component/Timeline";
import Projects from "../component/Projects";
import MySkills from "../component/MySkills";
import ContactMe from "../component/ContactMe";
import Footer from "../component/Footer";
import YoutubeVideo from "../component/Video";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <Timeline />
      <Projects />
      <MySkills />
      <ContactMe />
      <YoutubeVideo/>
      <Footer />
    </>
  );
}
