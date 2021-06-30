import axios from "axios";
import { DOMAIN } from "../../contance/global/contAction";

class ApiService {
  get = function (url,method) {
    return (
        axios({
            url: `${DOMAIN}/${url}`,
            method: `${method}`,
          })
    )
  };
}

export let api = new ApiService();
