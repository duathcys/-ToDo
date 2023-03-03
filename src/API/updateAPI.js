import axios from "axios";

export const TodoUpdate = (id, data) => {
   return axios.put(`http://localhost:8000/todo/list/${id}`, data)
      .then((res) => console.log(res.data))
}