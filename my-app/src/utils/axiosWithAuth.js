import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  console.log(token);
  return axios.create({
    headers: {
      Authorization: token,
    },
    baseURL: "https://african-market712.herokuapp.com/",
  });
};