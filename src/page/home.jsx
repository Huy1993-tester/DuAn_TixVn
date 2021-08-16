import React from "react";
import Application from "../componnet/application/application.component";
import Footer from "../componnet/footer";
import Header from "../componnet/header/header.component";
import News from "../componnet/news/news.component";
import Carousel from "../componnet/pageHome/carousel";
import TableBlock from "../componnet/pageHome/cinemeBlock";
import HomeApp from "../componnet/pageHome/homeApp";
import HomeMovie from "../componnet/pageHome/homeMovie";

function Home() {
  return (
    <>
      <Header />
      <Carousel />
      <HomeMovie />
      <TableBlock />
      <News />
      <Application />
      {/* <HomeApp /> */}
      <Footer />
    </>
  );
}

export default Home;
