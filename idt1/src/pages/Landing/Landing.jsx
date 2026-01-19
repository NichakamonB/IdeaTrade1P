import Hero from "./sections/Hero";
import Feature from "./sections/Feature";
import Project from "./sections/Project";
import Pricing from "./sections/Pricing";
import CTA from "./sections/CTA";

export default function Landing() {
  return (
        <section>
              <Hero />
              <Feature />
              <Project />
              <Pricing />
              <CTA />
        </section>
  );
}
