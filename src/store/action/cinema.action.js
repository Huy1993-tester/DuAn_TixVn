import {
  GET_CINEMA_GROUP_LIST,
  GET_CINEMA_LIST,
  GET_CINEMA_SYSTEM_LIST,
  GET_LIST_CUM_RAP,
  GET_LIST_RAP
} from "../constant/cinema.constant";
import { api } from "../../core/service/api.service";
import { STATUS_CODE } from "../../core/global/constant";
import { cinemaService } from "../../core/service/cinema.service";

export const getListRap = () => {
  let url = "api/QuanLyRap/LayThongTinHeThongRap";
  let method = "GET";
  return async (dispatch) => {
    try {
      const { res, status } = await api.get(url, method);
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

export const getCinemaSystemListAction = () => {
  return async (dispatch) => {
    try {
      const response = await cinemaService.getCinemaSystemList();
      dispatch({
        type: GET_CINEMA_SYSTEM_LIST,
        payload: response.data
      });
    } catch (error) {
      console.log(error.response);
    }
  };
};

export const getCinemaGroupListAction = (maHeThongRap) => {
  return async (dispatch) => {
    try {
      const response = await cinemaService.getCinemaGroupList(maHeThongRap);
      dispatch({
        type: GET_CINEMA_GROUP_LIST,
        payload: response.data
      });
    } catch (error) {
      console.log(error.response);
    }
  };
};

export const getCinemaListAction = (maCumRap) => {
  return {
    type: GET_CINEMA_LIST,
    payload: maCumRap
  };
};
