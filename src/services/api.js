import axios from "axios";
import swal from 'sweetalert';

const BASE_URL = `https://api.exchangeratesapi.io`;

export const createAPI = () => {
  const api = axios.create({
    baseURL: BASE_URL,
    responseType: `json`,
  });

  const onSuccess = (response) => response;

  const onFail = (error) => {
    const {response, request} = error;

    if (response) {
        swal(`Error ${response.status}`, `${response.statusText}`, `error`);
    } else if (request) {
      swal(`Error`, `No response was received`, `error`);
    } else {
      swal(`Error`, `Something went wrong!`, `error`);
    }

    throw error;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
