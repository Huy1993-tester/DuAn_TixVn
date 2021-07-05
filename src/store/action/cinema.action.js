import { GET_LIST_CUM_RAP, GET_LIST_RAP } from "../constant/cinema.constant";
import { api } from "../../core/service/api.service";
import { STATUS_CODE } from "../../core/global/constant";

export const getListRap = () => {
  let url = "api/QuanLyRap/LayThongTinHeThongRap";
  let method = "GET";
  return async (dispatch) => {
    try {
      const {res , status } = await api.get(url, method);
      if (STATUS_CODE.SUCCESS === status) {
        dispatch({
          type: GET_LIST_RAP,
          payload: res.data
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const getListCumRap = (maHeThongRap, maNhom) => {
  let url = `api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=${maNhom}`;
  let method = "GET";
  return async (dispatch) => {
    try {
      const res = await api.get(url, method);
      dispatch({
        type: GET_LIST_CUM_RAP,
        payload: res.data
      });
    } catch (err) {
      console.log(err);
    }
  };
};
