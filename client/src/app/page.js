import CallToAction from "@/components/home/CallToAction";
import Contact from "@/components/home/Contact";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Testimonials />
      <CallToAction />
      <Contact />
    </>
  );
}
