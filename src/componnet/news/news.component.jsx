import style from "./news.module.scss";
import like from "../../asset/image/like.png";
import comment from "../../asset/image/comment.png";
import cinemaList from "./cinema.data.json";
import reviewList from "./review.data.json";
import promotionList from "./promotion.data.json";

import React, { useState } from "react";

const News = () => {
  const [value, setValue] = useState("1");

  const handleChange = (e) => {
    const headerTab = document.querySelectorAll(".header__tab");
    headerTab.forEach((tab) => {
      tab.className = `${style.header__tab} header__tab`;
    });
    e.currentTarget.className += " active";
    setValue(e.target.value);
  };

  const renderNews = () => {
    let array = [];
    switch (value) {
      case "1":
        array = [...cinemaList];
        break;
      case "2":
        array = [...reviewList];
        break;
      case "3":
        array = [...promotionList];
        break;
    }
    const news = array.slice(0, 4).map((d, index) => {
      return (
        <div
          key={index}
          className={
            index === 0 || index === 1
              ? "col-sm-6 news__big"
              : "col-sm-4 news__big"
          }
        >
          <div className={style.news__item}>
            <div className={style.news__image}>
              <a target="_blank" href="#">
                <img src={d.image} />
              </a>
            </div>
            <h4 className="mt-3">
              <a target="_blank" className="text-decoration-none" href="#">
                {d.title}
              </a>
            </h4>
            <p className="mb-4">{d.description}</p>
            <span className="mr-3">
              <img className="mr-1" src={like} />
              {d.like}
            </span>
            <span>
              <img className="mr-1" src={comment} />
              {d.comment}
            </span>
          </div>
        </div>
      );
    });
    const smallNews = array.slice(4, 8).map((d, index) => {
      return (
        <div
          key={index}
          className={`row m-0 mb-3 ${style.news__item} ${style.news__item__small}`}
        >
          <div className="col-2 col-sm-3 col-lg-2 p-0">
            <div className={style.news__image}>
              <a target="_blank" href="#">
                <img src={d.image2} />
              </a>
            </div>
          </div>
          <h4 className={`${style.news__title} col-10 col-sm-9 col-lg-10`}>
            <a target="_blank" href="#">
              {d.title}
            </a>
          </h4>
        </div>
      );
    });
    return (
      <>
        {news}
        <div className="col-sm-4 news__small">{smallNews}</div>
      </>
    );
  };

  return (
    <section id="newsBlock" className={style.new__section}>
      <div className={style.wrapper}>
        <div className={style.news__content}>
          <div className={`${style.news__header}`}>
            <button
              className={`${style.header__tab} header__tab active`}
              value="1"
              onClick={handleChange}
            >
              Điện ảnh 24h
            </button>
            <button
              className={`${style.header__tab} header__tab`}
              value="2"
              onClick={handleChange}
            >
              Review
            </button>
            <button
              className={`${style.header__tab} header__tab`}
              value="3"
              onClick={handleChange}
            >
              Khuyến mãi
            </button>
          </div>
          <div className={style.news__body}>
            <div className="">
              <div className="row m-0">{renderNews()}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
