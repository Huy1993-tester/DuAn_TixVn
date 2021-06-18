import axios from "axios";
import {
  DOMAIN,
  GET_LIST_CUM_RAP,
  GET_LIST_RAP,
} from "../../contance/global/contAction";

export const getListRap = () => {
  return async (dispatch) => {
    try {
      const res = await axios({
        url: `${DOMAIN}/api/QuanLyRap/LayThongTinHeThongRap`,
        method: "GET",
      });
      dispatch({
        type: GET_LIST_RAP,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const getListCumRap = (maHeThongRap,maNhom) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        url: `${DOMAIN}/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=${maNhom}`,
        method: "GET",
      });
      dispatch({
        type: GET_LIST_CUM_RAP,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
