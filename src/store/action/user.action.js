import axios from "axios";
import {
  GET_USER_LIST_PAGINATION,
  SET_USER_DETAIL
} from "../constant/user.constant";
import { DOMAIN } from "../contance/global/contAction";

export const setUserDetailAction = (user) => {
  console.log(user);
  return { type: SET_USER_DETAIL, payload: user };
};

export const getUserListPaginationAction = (
  groupID = "GP01",
  pageNumber = "1",
  itemPerPageNumber = "5"
) => {
  return async (dispatch) => {
    try {
      const response = await axios({
        url: `${DOMAIN}/api/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=${groupID}&soTrang=${pageNumber}&soPhanTuTrenTrang=${itemPerPageNumber}`,
        method: "GET"
      });
      dispatch({
        type: GET_USER_LIST_PAGINATION,
        payload: response.data
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addUserAction = (user) => {
  return async () => {
    try {
      return await axios({
        url: `${DOMAIN}/api/QuanLyNguoiDung/ThemNguoiDung`,
        method: "POST",
        data: { ...user },
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidGFuaG4iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJRdWFuVHJpIiwibmJmIjoxNjI1MDM2NTI5LCJleHAiOjE2MjUwNDAxMjl9.3-NV6J-FhB0p2bhAjFOvBCQKIdBdc3EONir5RXq-7Ug`
        }
      });
    } catch (error) {
      return error.response;
    }
  };
};

export const deleteUserAction = (taiKhoan) => {
  return async () => {
    try {
      return await axios({
        url: `${DOMAIN}/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidGFuaG4iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJRdWFuVHJpIiwibmJmIjoxNjI1MDM2NTI5LCJleHAiOjE2MjUwNDAxMjl9.3-NV6J-FhB0p2bhAjFOvBCQKIdBdc3EONir5RXq-7Ug`
        }
      });
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  };
};

export const updateUserAction = (user) => {
  return async (dispatch) => {
    dispatch(setUserDetailAction({}));
    try {
      return await axios({
        url: `${DOMAIN}/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
        method: "PUT",
        data: { ...user },
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidGFuaG4iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJRdWFuVHJpIiwibmJmIjoxNjI1MDM2NTI5LCJleHAiOjE2MjUwNDAxMjl9.3-NV6J-FhB0p2bhAjFOvBCQKIdBdc3EONir5RXq-7Ug`
        }
      });
    } catch (error) {
      return error.response;
    }
  };
};

export const searchUserPaginationAction = (
  searchString,
  groupID,
  pageNumber,
  itemPerPageNumber
) => {
  return async (dispatch) => {
    try {
      const response = await axios({
        url: `${DOMAIN}/api/QuanLyNguoiDung/TimKiemNguoiDungPhanTrang?MaNhom=${groupID}&tuKhoa=${searchString}&soTrang=${pageNumber}&soPhanTuTrenTrang=${itemPerPageNumber}`,
        method: "GET"
      });
      console.log(response);
      dispatch({
        type: GET_USER_LIST_PAGINATION,
        payload: response.data
      });
    } catch (error) {
      console.log(error);
      return error.response;
    }
  };
};
