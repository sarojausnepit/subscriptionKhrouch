import axios from "axios";
import { getCookie, setCookie } from "./FrontendHelper";

axios.defaults.baseURL = "http://13.127.139.254:8080/khrouch/v1/api/admin";

export const Api = async (action) => {
  let response = null;
  if (
    action.type_data.method === "POST" ||
    action.type_data.method === "post"
  ) {
    response = await axios.post(action.type_data.endPoint, action.payload, {
      headers: await HeaderData(action.type_data.multipartFormData),
    });
  } else if (
    action.type_data.method === "PUT" ||
    action.type_data.method === "put"
  ) {
    response = await axios.put(action.type_data.endPoint, action.payload, {
      headers: await HeaderData(action.type_data.multipartFormData),
    });
  } else {
    response = await axios.get(action.type_data.endPoint, {
      params: { ...action.type_data.params },
      headers: await HeaderData(action.type_data.multipartFormData),
    });
  }
  if (action.type_data.saveBearerToken) {
    if (response.data.accessToken !== undefined) {
      setCookie("accessToken", response.data.accessToken);
    } else if (response.data.token !== undefined) {
      setCookie("accessToken", response.data.accessToken);
    } else if (response.data.access_token !== undefined) {
      setCookie("accessToken", response.data.accessToken);
    }
  }
  // console.log("repsonse from the db",response)
  return response;
};

const HeaderData = async (update = false) => {
  const token = getCookie("accessToken");
  if (token == null) {
    return {
      "Content-Type": "application/json",
    };
  } else if (update) {
    return {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    };
  } else {
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
  }
};
