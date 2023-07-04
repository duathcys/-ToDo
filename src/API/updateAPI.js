import axios from "axios";

export const TodoUpdate = async (id, data) => {
   return axios.put(`http://localhost:8000/todo/list/${id}`, data)
      .then((res) => res)
}

export const TodoCheckUpdate = async (id, done) => {
   return axios.put(`http://localhost:8000/todo/list/update/${id}`, done)
       .then((res) => res)
}
