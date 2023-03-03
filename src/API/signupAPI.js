import axios from "axios";

export const doSignUpAsync = async (data)=>{
   return axios.post('http://localhost:8000/user/signup/', data)
      .then((res)=>res)
}