import React from "react";
import { Helmet } from "react-helmet";
import FeaturedSection from "./HomeComponents/FeaturedSection";
import WhyChooseUs from "./HomeComponents/WhyChooseUs";
import Solutions from "./HomeComponents/Solutions";
import Industry from "./HomeComponents/Industry";
import LatestPublication from "./HomeComponents/LatestPublication";
import Benefits from "./HomeComponents/Benefits";
import Clients from "./HomeComponents/Clients";

export default function Home() {
  return (
    <section id="Home">
      <Helmet>
        <title>Sheer Analytics And Insights. Welcome to Home</title>
        <meta name="description" content="Online presence of Sheer Analytics and Insights PVT LTD. " />
      </Helmet>
      <FeaturedSection />
      <Solutions />
      <Industry />
      <LatestPublication />
      <Benefits />
      <Clients />
      <WhyChooseUs />
    </section>
  );
}
