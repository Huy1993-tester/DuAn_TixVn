import React, { useEffect } from "react";
import Application from "../components/application/application.component";
import Carousel from "../components/carousel/carousel.component";
import Footer from "../components/footer/footer.component";
import Header from "../components/header/header.component";
import News from "../components/news/news.component";
import HomeMovie from "../components/homeMovie/homeMovie.component";
import Cinema from "../components/cinema/cinema.component";
import Loader from "../components/loader/loader.component";
import { stopLoadingAction } from "../store/action/common.action";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.common.isLoading);
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(stopLoadingAction());
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <>
      <Loader />
      <Header />
      {/* {isLoading ? (
        <Loader />
      ) : (
        <> */}
      <Carousel />
      <HomeMovie />
      <Cinema />
      <News />
      <Application />
      <Footer />
      {/* </>
      )} */}
    </>
  );
}

export default Home;
