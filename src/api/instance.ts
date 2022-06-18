import axios from "axios";
import { API_URL } from "@env";
import { interceptRequest } from "./interceptor/requestInterceptor";
import { interceptResponse } from "./interceptor/responseInterceptor";

const axiosSetting = {
  baseURL: API_URL,
  headers: {
    "Content-type": "application/json",
  },
};
export const instance = axios.create(axiosSetting);

interceptRequest();
interceptResponse();
