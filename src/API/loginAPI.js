import axios from "axios";

export const doLogin = (user_id, user_pw) => {
   // const navigate = useNavigate();
   return axios.post(`http://localhost:8000/user/login/`, {user_id, user_pw})
      .then((res) => {
         localStorage.setItem('access', res.data.access);
         localStorage.setItem('refresh', res.data.refresh);
         localStorage.setItem('response', res.data);
         console.log(res);
         return JSON.stringify(res);
         // eslint-disable-next-line no-restricted-globals
         // navigate(`/todo/list/?info=${localStorage.getItem('UserId')}`)
      })
      .catch((err) => {
         throw new Error(err);
         // alert(`${localStorage.getItem('login error')}`)
      })
}

export const doLoginAsync = async (data) => {
   return axios.post(`http://localhost:8000/user/login/`, data)
      .then((res) => res)
}