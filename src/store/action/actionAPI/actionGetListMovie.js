import axios from "axios";
import { GET_LIST_MOVIE } from "../../contance/global/contAction";

export const getListMovie = () => {
  return async (dispatch) => {
    try {
      const res = await axios({
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
        method: "GET",
      });
      dispatch({
        type: GET_LIST_MOVIE,
        payload: res,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
