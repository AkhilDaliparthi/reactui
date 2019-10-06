import axios from "axios";

export function getCall(url, requestParams) {
  return axios
    .get("http://localhost:8080/app/" + url, {
      params: requestParams
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}
