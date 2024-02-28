import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Achievements from "./components/Achievements";
export default function Home() {
  const Navlinks = [
    { href: "#hero", title: "Home" },
    { href: "#about", title: "About" },
    { href: "#projects", title: "Projects" },
    { href: "/blog", title: "Blog" },
  ];

  return (
    <main className=" min-h-screen bg-black p-2">
      <Navbar Navlinks={Navlinks} />
      <HeroSection />
      <Achievements />
      <About />
      <Projects />
      <Footer />
    </main>
  );
}
