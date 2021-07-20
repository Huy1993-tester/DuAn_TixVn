import React, { useState } from "react";
import Footer from "./footer";
import Carousel from "./pageHome/carousel";
import TableBlock from "./pageHome/cinemeBlock";
import HomeApp from "./pageHome/homeApp";
import HomeMovie from "./pageHome/homeMovie";
import NewBlock from "../componnet/pageHome/newBlock";
import webLogo from "../asset/image/web-logo.png";
import { NavLink } from "react-router-dom";
import { makeStyles, Menu, MenuItem } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  userAria: {
    position: "absolute",
    top: "50%",
    right: 0,
    transform: "translateY(-50%)"
  },
  userMenu: {
    position: "absolute",
    zIndex: 1,
    backgroundColor: "#959595",
    borderRadius: "5px",
    "& a:hover": {
      backgroundColor: "#888",
      borderRadius: "5px"
    }
  }
}));
function Header() {
  const classes = useStyles();
  const [openMenu, setOpenMenu] = useState(false);

  const handleSignout = () => {
    localStorage.clear();
  };

  const renderUserName = () => {
    const userName = JSON.parse(localStorage.getItem("hoTen"));
    return userName !== null ? (
      <a
        className="nav-link"
        href="#"
        onPointerEnter={() => {
          setOpenMenu(true);
        }}
        onPointerLeave={() => {
          setOpenMenu(false);
        }}
      >
        Xin chào {userName}!{renderMenu()}
      </a>
    ) : (
      <NavLink className="nav-link" to="/sign-in">
        Đăng nhập
      </NavLink>
    );
  };

  const renderMenu = () => {
    return openMenu ? (
      <div className={classes.userMenu}>
        <a
          className="dropdown-item text-white"
          href="#"
          onClick={handleSignout}
        >
          Đăng xuất
        </a>
      </div>
    ) : (
      ""
    );
  };
  return (
    <div>
      <nav
        id="navbar-example2"
        className="header navbar navbar-light bg-light fixed-top"
      >
        <a className="navbar-brand" href="#">
          <img src={webLogo} alt="" height="50px" width="50px" />
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
        <div className={classes.userAria}>{renderUserName()}</div>
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
        <HomeApp />
        <Footer />
      </div>
    </div>
  );
}

export default Header;
