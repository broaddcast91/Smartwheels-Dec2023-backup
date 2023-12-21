import React from "react";
import Header from "../components/header/Header";
import Range from "../components/home/range/Range";
import Channel from "../components/home/Channel";
import CarEnquiry from "../components/home/CarEnquiry";
import Slider from "../components/home/Slider";
import Values from "../components/home/Values";
import Subscribe from "../components/home/Subscribe";

function Home() {
  return (
    <>
      <Header />
      <Slider />
      <Channel />
      <Range />
      <CarEnquiry />
      <Values />
      <Subscribe />
    </>
  );
}

export default Home;
