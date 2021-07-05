import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDetailMovie } from "../store/action/movie.action";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "@material-ui/core";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import TabPanel from "@material-ui/lab/TabPanel";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyItems: "center",
  },
  root2: {
    width: 200,
    display: "flex",
    alignItems: "center",
  },
}));

export function Detail() {
  let { maPhim } = useParams();
  const dispatch = useDispatch();
  var dateFormat = require("dateformat");
  const detailMovie = useSelector((state) => {
    return state.movie.detail_movie;
  });

  useEffect(() => {
    dispatch(getDetailMovie(maPhim));
  }, [dispatch]);

  const classes = useStyles();
  const [value, setValue] = React.useState('TH');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 
  return (
    <>
      <img className="backGroundDetail" src={detailMovie.hinhAnh} />
      <Container className="children">
        <div className="detail_movie">
          <img src={detailMovie.hinhAnh} alt="" height="400px" width="300px" />
          <div className="detail_movie_child">
            <h3>{dateFormat(detailMovie.ngayKhoiChieu, "dd/mm/yyyy")}</h3>
            <h3>{detailMovie.tenPhim}</h3>
            <h3>2D/Digital</h3>
          </div>
          <div>
            <div class="page">
              <div class="clearfix">
                <div class="c100 p50 big green">
                  <span>50%</span>
                  <div class="slice">
                    <div class="bar"></div>
                    <div class="fill"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.root2}>
              <Rating
                name="hover-feedback"
                value={'5'}
                precision={1}
                style={{left:'50%'}}
              />
            </div>
          </div>
        </div>

        <TabContext value={value} className="barTab">
          <AppBar position="static">
            <TabList
              className="barTab"
              onChange={handleChange}
              aria-label="simple tabs example"
            >
              <Tab label="THÔNG TIN" value="TH" />
              <Tab label="ĐÁNH GIÁ" value="DG" />
            </TabList>
          </AppBar>

          <TabPanel value="TH" className="detail_text">
            <div>
              <h5>Ngày khởi chiếu</h5>
              <h5>Tên Phim</h5>
              <h5>Định dạng</h5>
            </div>
            <div>
              <h5>{dateFormat(detailMovie.ngayKhoiChieu, "dd/mm/yyyy")}</h5>
              <h5>{detailMovie.tenPhim}</h5>
              <h5>2D/Digital</h5>
            </div>
            <div>
              <h4>Nội dung</h4>
              <h5>{detailMovie.moTa}</h5>
            </div>
          </TabPanel>
          <TabPanel value="DG" className="detail_text">
            <h3>{detailMovie.danhGia}</h3>
          </TabPanel>
        </TabContext>
      </Container>
    </>
  );
}
