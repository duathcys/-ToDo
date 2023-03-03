import axios from "axios";

export const TodoAdd = async (data) => {
   return axios.post('http://localhost:8000/todo/list/', data)
      .then((res) => res)
}