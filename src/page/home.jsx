import React from "react";
import Application from "../components/application/application.component";
import Carousel from "../components/carousel/carousel.component";
import Footer from "../components/footer/footer.component";
import Header from "../components/header/header.component";
import News from "../components/news/news.component";
import HomeMovie from "../components/homeMovie/homeMovie.component";
import Cinema from "../components/cinema/cinema.component";

function Home() {
  return (
    <>
      <Header />
      <Carousel />
      <HomeMovie />
      <Cinema />
      <News />
      <Application />
      <Footer />
    </>
  );
}

export default Home;
