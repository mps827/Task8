import axios from "axios";

export const authHeader: { Authorization: string } | {} =
  axios.interceptors.request.use((req) => {
    req.headers.Authorization = localStorage.getItem("access_token")
      ? "Bearer " + localStorage.getItem("access_token")
      : null;
    return req;
  });

const prodBaseUrl = "https://6648687d2bb946cf2fa076c0.mockapi.io/api/v1/";
const devBaseUrl = "https://6648687d2bb946cf2fa076c0.mockapi.io/api/v1/";
export const baseURL =
  process.env.NODE_ENV === "development" ? devBaseUrl : prodBaseUrl;
axios.defaults.baseURL = baseURL;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.get["Content-Type"] = "application/json";
axios.defaults.headers.delete["Content-Type"] = "application/json";
axios.defaults.headers.put["Content-Type"] = "application/json";
axios.defaults.headers.patch["Content-Type"] = "application/json";
axios.defaults.headers.Accept = "application/json";

// if (authHeader) {
//   axios.defaults.headers.common[
//     "Authorization"
//   ] = `Bearer ${localStorage.getItem("access_token")}`;
// }

export default axios;
