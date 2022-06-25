import axios from "axios";

export function myInterceptor2() {
  axios.interceptors.response.use((res) => {
    console.log(res);
    return res;
  });
}
