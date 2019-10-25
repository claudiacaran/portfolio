import React from "react";

import Description from "../components/description";
import Portrait from "../components/portrait";
import Section from "../components/section";
import SocialSection from "../components/section-social";
import ServicesSection from "../components/section-services";
import Biography from "../components/section-biography";
import Awards from "../components/section-awards";
import Clients from "../components/section-clients";
import CopyrightSection from "../components/section-copyright";
import "./about.css";

function About() {
  return (
    <div className="About">
      <Portrait />
      <Description />
      <div className="col1">
        <Section title="Contact">studio@claudiacaran.com</Section>
        <SocialSection />
        <CopyrightSection />
      </div>
      <div className="col2">
        <Biography />
      </div>
      <div className="col3">
        <ServicesSection />
        <Awards />
        <Clients />
      </div>
    </div>
  );
}

export default About;
