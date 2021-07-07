import axios from "axios";
import { DOMAIN } from "../global/constant";
import { TOKEN } from "./user.service";

class MovieService {
  getMovieListPagination = (groupID, pageNumber, itemPerPageNumber) => {
    return axios({
      url: `${DOMAIN}/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=${groupID}&soTrang=${pageNumber}&soPhanTuTrenTrang=${itemPerPageNumber}`,
      method: "GET"
    });
  };

  deleteMovie = (data) => {
    return axios({
      url: `${DOMAIN}/api/QuanLyPhim/XoaPhim?MaPhim=${data}`,
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${TOKEN}`
      }
    });
  };

  addMovie = (data) => {
    return axios({
      url: `${DOMAIN}/api/QuanLyPhim/ThemPhimUploadHinh`,
      method: "POST",
      data,
      headers: {
        Authorization: `Bearer ${TOKEN}`
      }
    });
  };

  updateMovie = (data) => {
    return axios({
      url: `${DOMAIN}/api/QuanLyPhim/CapNhatPhimUpload`,
      method: "POST",
      data,
      headers: {
        Authorization: `Bearer ${TOKEN}`
      }
    });
  };
}

export const movieService = new MovieService();
