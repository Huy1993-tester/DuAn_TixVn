import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getListMovie } from "../action/actionAPI/actionGetListMovie";
import Carousel from "../componnet/carousel";

function HomeMovie() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListMovie());
  });
  return (
    <div>
      <Carousel />
    </div>
  );
}

export default HomeMovie;
