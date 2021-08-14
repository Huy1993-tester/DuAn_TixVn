import React from "react";
import Slider from "react-slick";
import HomeTool from "./homeTool";
import player from "../../asset/image/play-video.png";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
      }}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
      }}
      onClick={onClick}
    />
  );
}

export default function Carousel() {
  var settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    rows: 1,
    slidesPerRow: 1,
    // autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    
    <div>
      <Slider {...settings} className="carousel container-fluid">
       <a href="https://www.youtube.com/embed/9nyV-pgMX4I" id=""  className="venobox " data-vbtype="video">
        <div className="banTayDietQuy ">
         
        </div>
        <div className="round">  <img  src={player} alt="" /></div>
            
        </a>
        <a href="https://www.youtube.com/embed/IqIO53nQZ2E"  className="venobox " data-vbtype="video">
        <div className="trangTi ">
        </div>
        <div className="round">  <img  src={player} alt="" /></div>
       
        </a> 
         <a href="https://www.youtube.com/embed/kBY2k3G6LsM"  className="venobox " data-vbtype="video">
        <div className="latMat ">
        </div>
        <div className="round">  <img  src={player} alt="" /></div>
       
        </a>
      </Slider>
      <div className="positionHomeTool">
      <HomeTool />
      </div>
     
    </div>
  );
}
