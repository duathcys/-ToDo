import axios from "axios";

export const TodoAdd = async (data) => {
    return axios.post('http://localhost:8000/todo/list/', data)
        .then((res) => res)
}

export const TodoDelete = async (id) => {
    return axios.delete(`http://localhost:8000/todo/list/${id}`)
        .then(res => res)
}


export const TodoGetData = () => {
    return axios.get(`http://localhost:8000/todo/list/`, {
        params: {info: localStorage.getItem("UserId")}
    })
}

export const TodoUpdate = async (id, data) => {
    return axios.put(`http://localhost:8000/todo/list/${id}`, data)
        .then((res) => res)
}

export const TodoCheckUpdate = async (id, done) => {
    return axios.put(`http://localhost:8000/todo/list/update/${id}`, done)
        .then((res) => res)
}
