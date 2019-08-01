import axios from "axios";

 const AxiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`
    },
    baseURL: "https://tipsease-backend-new.herokuapp.com/"
  });
};
export default AxiosWithAuth