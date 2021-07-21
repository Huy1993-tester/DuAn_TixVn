import React from "react";
import { useRef } from "react";

import Footer from "../componnet/footer";
import Header from "../componnet/header";
import Carousel from "../componnet/pageHome/carousel";
import TableBlock from "../componnet/pageHome/cinemeBlock";
import HomeApp from "../componnet/pageHome/homeApp";
import HomeMovie from "../componnet/pageHome/homeMovie";
import NewBlock from "../componnet/pageHome/newBlock";

function Home() {
  let LC = useRef(null);
  let CR = useRef(null);
  let TT = useRef(null);
  let UD = useRef(null);
  const handleClick = (params) => {
    console.log(params);
    if ((params === "LC")) {
      tr(LC);
    } else if ((params === "CR")) {
      tr(CR);
    } else if ((params === "TT")) {
      tr(TT);
    } else if ((params === "UD")) {
      tr(UD);
    }
  };
  const tr = (params) => {
    params.current.scrollIntoView();
  };
  return (
    <div>
      <Header handleClick={handleClick} />
      <Carousel />
      <div ref={LC}>
        <HomeMovie />
      </div>
      <div ref={CR}>
        <TableBlock />
      </div>
      <div ref={TT}>
        <NewBlock />
      </div>
      <div ref={UD}>
        <HomeApp />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
