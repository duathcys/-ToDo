import axios from "axios";

export const TodoUpdate = async (id, data) => {
   return axios.put(`http://localhost:8000/todo/list/${id}`, data)
      .then((res) => res)
}