import axios from "axios";

export const TodoDelete = (id) => {
   return axios.delete(`http://localhost:8000/todo/list/${id}`)
      .then(res => console.log(res.data))
}