import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getListMovie } from "../store/action/actionAPI/actionGetListMovie";

function HomeMovie() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListMovie());
  });
  return (
    <div>
      <h1>helo</h1>
    </div>
  );
}

export default HomeMovie;
