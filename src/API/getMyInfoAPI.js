import axios from "axios";


export const getMyInfo = ()=> {
   return axios.get('http://localhost:8000/user/find/id/', {
      params : {nickname: localStorage.getItem("nickname")}
   })
}