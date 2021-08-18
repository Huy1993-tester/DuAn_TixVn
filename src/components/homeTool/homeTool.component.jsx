import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListMovie } from "../../store/action/movie.action";
import style from "./homeTool.module.scss";

const HomeTool = () => {
  const dispatch = useDispatch();
  const movieList = useSelector((state) => state.movie.list_movie);

  const renderMovieList = () => {
    return movieList.map((m) => {
      return <li className={style.menu__item}>{m.tenPhim}</li>;
    });
  };

  useEffect(() => {
    dispatch(getListMovie);
  });
  return (
    <div className={style.home__tool}>
      <div className={style.tool__movie}>
        <div
          type="button"
          className={`${style.tool__dropdown} dropdown-toggle`}
          data-toggle="dropdown"
        >
          Phim
        </div>
        <ul className={`${style.tool__menu} dropdown-menu`}>
          {renderMovieList()}
        </ul>
      </div>
      <div className={style.tool__cinema}>
        <div
          type="button"
          className={`${style.tool__dropdown} dropdown-toggle`}
          data-toggle="dropdown"
        >
          Rạp
        </div>
        <ul className={`${style.tool__menu} dropdown-menu`}>
          {renderMovieList()}
        </ul>
      </div>
      <div className={style.tool__date}>
        <div
          type="button"
          className={`${style.tool__dropdown} dropdown-toggle`}
          data-toggle="dropdown"
        >
          Ngày xem
        </div>
        <ul className={`${style.tool__menu} dropdown-menu`}>
          {renderMovieList()}
        </ul>
      </div>
      <div className={style.tool__showtime}>
        <div
          type="button"
          className={`${style.tool__dropdown} dropdown-toggle`}
          data-toggle="dropdown"
        >
          Suất chiếu
        </div>
        <ul className={`${style.tool__menu} dropdown-menu`}>
          {renderMovieList()}
        </ul>
      </div>
      <div className={style.tool__booking}>
        <button className="btn btn-secondary text-uppercase">
          Mua vé ngay
        </button>
      </div>
    </div>
  );
};

export default HomeTool;
