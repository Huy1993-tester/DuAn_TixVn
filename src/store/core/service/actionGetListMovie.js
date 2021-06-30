import {
  GET_LIST_MOVIE,
  GET_MOVIE,
} from "../../contance/global/contAction";
import { api } from "../api/apiService";

export const getListMovie = () => {
  let url = "api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01";
  let method = "GET";
  return async (dispatch) => {
    try {
      const res = await api.get(url,method);
      dispatch({
        type: GET_LIST_MOVIE,
        payload: res.data,
      });
    } catch (err) {
      console.log(err.status);
    }
  };
};

export const getMovie = (ds1) => {
  return {
    type: GET_MOVIE,
    payload: ds1,
  };
};
