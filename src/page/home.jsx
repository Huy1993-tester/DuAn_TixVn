import React from "react";
import Footer from "../componnet/footer";
import Carousel from "../componnet/pageHome/carousel";
import TableBlock from "../componnet/pageHome/cinemeBlock";
import HomeApp from "../componnet/pageHome/homeApp";
import HomeMovie from "../componnet/pageHome/homeMovie";
import NewBlock from "../componnet/pageHome/newBlock";


function Home() {
  return (
    <div>
      <Carousel />
      <HomeMovie />
      <TableBlock />
      <NewBlock />
      <HomeApp/>
      <Footer/>
    </div>
  );
}

export default Home;
