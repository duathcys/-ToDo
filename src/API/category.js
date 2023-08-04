import axios from "axios";


export const getCategoryList = ()=>{
    return axios.get('http://localhost:8000/todo/list/category');
}

export const createCategory = async (data) =>{
    return axios.post('http://localhost:8000/todo/list/category/', data)
        .then((res) => res);
}