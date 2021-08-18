import React from "react";
import Application from "../components/application/application.component";
import Carousel from "../components/carousel/carousel.component";
import Footer from "../components/footer/footer.component";
import Header from "../components/header/header.component";
import News from "../components/news/news.component";
import TableBlock from "../components/pageHome/cinemeBlock";
import HomeMovie from "../components/homeMovie/homeMovie.component";

function Home() {
  return (
    <>
      <Header />
      <Carousel />
      <HomeMovie />
      <TableBlock />
      <News />
      <Application />
      <Footer />
    </>
  );
}

export default Home;
