import axios from "axios";

export const doLoginAsync = async (data) => {
    return axios.post(`http://localhost:8000/user/login/`, data)
        .then((res) => res)
}


export const doSignUpAsync = async (data)=>{
    return axios.post('http://localhost:8000/user/signup/', data)
        .then((res)=>res)
}


export const deleteUser = async (id) =>{
    return axios.delete(`http://localhost:8000/user/auth/${id}`)
        .then(res => res);
}

export const getMyInfo = ()=> {
    return axios.get('http://localhost:8000/user/find/id/', {
        params : {nickname: localStorage.getItem("nickname")}
    })
}