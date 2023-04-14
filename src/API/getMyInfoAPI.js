import axios from "axios";


export const getMyInfo = ()=> {
   return axios.get('http://localhost:8000/user/info'), {
      params : {userid: localStorage.getItem("UserId")}
   }
}