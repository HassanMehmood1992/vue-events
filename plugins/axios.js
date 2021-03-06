import Vue from "vue";
import axios from "axios";

axios.defaults.baseURL = process.env.NUXT_ENV_API_URL;
axios.defaults.headers.post["Content-Type"] = "application/json; charset=utf-8";

export default ({ store, redirect }) => {
  const requestHandler = request => {
    store.dispatch("pageHeader/setTopLoader", true);
    return request;
  };

  const successHandler = response => {
    store.dispatch("pageHeader/setTopLoader", false);
    return response;
  };

  const errorHandler = error => {
    store.dispatch("pageHeader/setTopLoader", false);
    window.getApp.snackbar.config = {
      show: true,
      text: error,
      color:'error',
      timeout:2000
    };
    // redirect('/home')
    return error;
  };

  axios.interceptors.request.use(request => requestHandler(request));

  axios.interceptors.response.use(
    response => successHandler(response),
    error => errorHandler(error)
  );
};

window.axios = axios;
Vue.prototype.axios = axios;
