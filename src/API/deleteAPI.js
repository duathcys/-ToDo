import axios from "axios";

export const TodoDelete = async (id) => {
   return axios.delete(`http://localhost:8000/todo/list/${id}`)
      .then(res => res)
}