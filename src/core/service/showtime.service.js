import axios from "axios";
import { DOMAIN } from "../global/constant";
import { TOKEN } from "./user.service";

class ShowtimeService {
  createShowtime = (data) => {
    return axios({
      url: `${DOMAIN}/api/QuanLyDatVe/TaoLichChieu`,
      method: "POST",
      data,
      headers: {
        Authorization: `Bearer ${TOKEN}`
      }
    });
  };
}

export const showtimeService = new ShowtimeService();