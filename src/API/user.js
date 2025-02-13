import axios from "axios";

export const doLoginAsync = async (data) => {
    return axios.post(`http://localhost:8000/user/login/`, data)
        .then((res) => res.data)
}


export const doSignUpAsync = async (data)=>{
    return axios.post('http://localhost:8000/user/signup/', data)
        .then((res)=>res)
}


export const deleteUser = async () =>{
    return axios.delete(`http://localhost:8000/user/auth/`, {
        params : {user_id: localStorage.getItem("UserId")}
    })
}

export const getMyInfo = ()=> {
    return axios.get('http://localhost:8000/user/find/id/', {
        params : {nickname: localStorage.getItem("nickname")}
    })
}

export const updateMyInfo = (data)=>{
    return axios.put(`http://localhost:8000/user/auth/`, data, {
        params: {user_id: localStorage.getItem("UserId")}
    });
}