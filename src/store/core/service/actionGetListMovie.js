import axios from "axios";
import {
  DOMAIN,
  GET_LIST_MOVIE,
  GET_MOVIE,
} from "../../contance/global/contAction";

export const getListMovie = () => {
  return async (dispatch) => {
    try {
      const res = await axios({
        url: `${DOMAIN}/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`,
        method: "GET",
      });
      dispatch({
        type: GET_LIST_MOVIE,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const getMovie = (ds1) => {
  return {
      type: GET_MOVIE,
      payload: ds1,
    };
};
