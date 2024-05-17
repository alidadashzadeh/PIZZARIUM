import CTA from "../features/homepage/CTA";
import Contact from "../features/homepage/Contact";
import Faq from "../features/homepage/Faq";
import Features from "../features/homepage/Features";
import Footer from "../ui/Footer";
import Hero from "../features/homepage/Hero";
import Subscribe from "../features/homepage/Subscribe";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <CTA />
      <Faq />
      <Subscribe />
      <Contact />
    </>
  );
}
