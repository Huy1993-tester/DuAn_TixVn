import React from "react";
import Footer from "./footer";
import Carousel from "./pageHome/carousel";
import TableBlock from "./pageHome/cinemeBlock";
import HomeApp from "./pageHome/homeApp";
import HomeMovie from "./pageHome/homeMovie";
import NewBlock from "../componnet/pageHome/newBlock";
import webLogo from '../asset/image/web-logo.png';
function Header() {
  return (
    <div>
      <nav id="navbar-example2" className="header navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img src={webLogo} alt="" height="50px" width="50px"/>
        </a>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link" href="#LichChieu">
             Lịch chiếu 
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#CumRap">
              Cụm rạp
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#TinTuc">
              Tin tức
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#UngDung">
              Ứng dụng
            </a>
          </li>
        </ul>
      </nav>
      <div data-spy="scroll" data-target="#navbar-example2" data-offset={0}>
        <Carousel />
        <h4 id="LichChieu"></h4>
        <HomeMovie />
        <h4 id="CumRap"></h4>
        <TableBlock />
        <h4 id="TinTuc"></h4>
        <NewBlock />
        <h4 id="UngDung"></h4>
        <HomeApp/>
        <Footer/>
      </div>
    </div>
  );
}

export default Header;
