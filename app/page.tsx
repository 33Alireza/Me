import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Certificates from "@/components/sections/Certificates";
import Social from "@/components/sections/Social";
import Contact from "@/components/sections/Contact";
import PortfolioBackground from "@/components/layout/PortfolioBackground";

export default function Home() {
    return (
        <PortfolioBackground>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Certificates />
            <Social />
            <Contact />
        </PortfolioBackground>
    );
}