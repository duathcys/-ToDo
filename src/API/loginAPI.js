import axios from "axios";

export const doLoginAsync = async (data) => {
   return axios.post(`http://localhost:8000/user/login/`, data)
      .then((res) => res)
}