import {
  GET_LIST_CHAIR,
  GET_LIST_CUM_RAP,
  GET_LIST_RAP,
} from "../constant/cinema.constant";
import { api } from "../../core/service/api.service";
import { STATUS_CODE } from "../../core/global/constant";

export const getListRap = () => {
  let url = "api/QuanLyRap/LayThongTinHeThongRap";
  let method = "GET";
  return async (dispatch) => {
    try {
      const { res, status } = await api.get(url, method);
      if (STATUS_CODE.SUCCESS === status) {
        dispatch({
          type: GET_LIST_RAP,
          payload: res.data,
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
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const getListChair = (id) => {
  let url = `api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`;
  let method = "GET";
  return async (dispatch) => {
    try {
      const res = await api.get(url, method);
      dispatch({
        type: GET_LIST_CHAIR,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const BookingChair = (maLichChieu,danhSachVe) => {
  let url = "api/QuanLyDatVe/DatVe";
  let method = "POST";
  let taiKhoanNguoiDung = "asuka1997";
  let data = {
    maLichChieu,
    danhSachVe,
    taiKhoanNguoiDung,
  };
  console.log(data)
  let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYXN1a2ExOTk3IiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiUXVhblRyaSIsIm5iZiI6MTYyNjUzNjAzNywiZXhwIjoxNjI2NTM5NjM3fQ.YaxomH4iG8SoRooQ8qjNDPQ0JS9rgP2xtsezJOxSILw";

  return async (dispatch) => {
    try {
     const response = await api.post(url, method, data, token);
     console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
};
