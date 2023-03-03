import axios from "axios";

export const TodoAdd = (data) => {
   return axios.post('http://localhost:8000/todo/list/', data)
      .then((res) => {
         console.log(res);
      })
      .catch((err) => {
         console.log(err)
      })
}