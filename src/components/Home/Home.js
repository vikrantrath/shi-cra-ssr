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
        <title>Sheer Analytics And Insights</title>
        <meta
          name="description"
          content=" Sheeranalyticsandinsights Market Research Services Gives You Almost Real-Time Data Of Market Conditions, Challenges, Visualization Services For B2B All Around The World."
        />
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
