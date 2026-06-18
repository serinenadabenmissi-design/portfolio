import Navigation from "./components/Navigation";
import Hero from "./sections/Hero";
import FeaturedProjects from "./sections/FeaturedProjects";
import About from "./sections/About";
import TechStack from "./sections/TechStack";
import Journey from "./sections/Journey";
import Experiments from "./sections/Experiments";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      <ScrollProgress />
      <Navigation />
      <Hero />
      <FeaturedProjects />
      <About />
      <TechStack />
      <Journey />
      <Experiments />
      <Contact />
      <Footer />
    </main>
  );
}
