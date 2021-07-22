import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import webLogo from "../asset/image/web-logo.png";

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
function Header({ handleClick }) {
  const classes = useStyles();
  const [openMenu, setOpenMenu] = useState(false);

  const onClick = (e) => {
    handleClick(e.target.name);
  };

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
            <a onClick={onClick} name="LC" className="nav-link">
              Lịch chiếu
            </a>
          </li>
          <li className="nav-item">
            <a onClick={onClick} name="CR" className="nav-link">
              Cụm rạp
            </a>
          </li>
          <li className="nav-item">
            <a onClick={onClick} name="TT" className="nav-link">
              Tin tức
            </a>
          </li>
          <li className="nav-item">
            <a onClick={onClick} name="UD" className="nav-link">
              Ứng dụng
            </a>
          </li>
        </ul>
        <div className={classes.userAria}>{renderUserName()}</div>
      </nav>
    </div>
  );
}

export default Header;
