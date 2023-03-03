import axios from "axios";

export const TodoGetData = () => {
   return axios.get(`http://localhost:8000/todo/list/`, {
      params: {info: localStorage.getItem("UserId")}
   })
}

