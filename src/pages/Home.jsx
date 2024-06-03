import CTA from "../features/homepage/CTA";
import Contact from "../features/homepage/Contact";
import Faq from "../features/homepage/Faq";
import Features from "../features/homepage/Features";
import Hero from "../features/homepage/Hero";
import Subscribe from "../features/homepage/Subscribe";
import PageTransition from "../ui/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <Features />
      <CTA />
      <Faq />
      <Subscribe />
      <Contact />
    </PageTransition>
  );
}
