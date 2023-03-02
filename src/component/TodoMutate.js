import {useMutation, useQuery, useQueryClient} from "react-query";
import axios from "axios";

const TodoData = () => {
   return axios.get(`http://localhost:8000/todo/list/`, {
      params: {info: localStorage.getItem("UserId")}
   })
}
const TodoAdd = (data) => {
   return axios.post('http://localhost:8000/todo/list/', data)
      .then((res) => {
         console.log(res);
      })
      .catch((err) => {
         console.log(err)
      })
}


const TodoDelete = (id) => {
   return axios.delete(`http://localhost:8000/todo/list/${id}`)
      .then(res => {
         console.log(id)
         console.log(res);
         console.log(res.data);
      })
}

const TodoUpdate = (id, data) => {
   console.log(id)
   console.log('???', data);
   return axios.put(`http://localhost:8000/todo/list/${id}`, data)
      .then((res) => {
         console.log(id)
         console.log(res);
         console.log(res.data);
      })
}
const TodoChange = (id)=>{
   return axios.put(`http://localhost:8000/todo/list/${id}`)
      .then(res => {
         console.log(id)
         console.log(res);
         console.log(res.data);
      })
}

const TodoInfo = () => {
   return axios.get('http://localhost:8000/user/login/')
}
const TodoUser = (data) => {
   // const navigate = useNavigate();
   return axios.post(`http://localhost:8000/user/login/`, data)
      .then((res) => {
         localStorage.setItem('access', res.data.access);
         localStorage.setItem('refresh', res.data.refresh);
         localStorage.setItem('response', res.data);
         console.log(res);
         return JSON.stringify(res);
         // eslint-disable-next-line no-restricted-globals
         // navigate(`/todo/list/?info=${localStorage.getItem('UserId')}`)
      })
   .catch((err)=>{
      localStorage.setItem("login error", JSON.stringify(err.response.data['non_field_errors'] ||
         err.response.data['user_id'] || err.response.data['user_pw']))
      // alert(`${localStorage.getItem('login error')}`)
   })
}
const TodoSignUp = (data) => {
   return axios.post('http://localhost:8000/user/signup/', data)
      .then((res) => {
         console.log(res)
         // localStorage.setItem('error', res.data.serializers.ValidationError);
         // localStorage.getItem('error');
      })
      .catch((err) => {
         localStorage.setItem("signup error", JSON.stringify(err.response.data['non_field_errors'] ||
            err.response.data['user_id'] || err.response.data['user_pw']))
         console.log(localStorage.getItem('signup error'))
      })
}

export const TodoGetData = () => {
   return useQuery("todo", TodoData)
}
export const TodoMutation = () => {
   const queryClient = useQueryClient()
   return useMutation(TodoAdd, {
      onSuccess: () => {
         queryClient.invalidateQueries("todo")
      }
   })
}

export const TodoInfoData = () => {
   return useQuery("info", TodoInfo)
}
export const TodoDeleteMutation = () => {
   const queryClient = useQueryClient()
   return useMutation(TodoDelete, {
      onSuccess:()=>{
         queryClient.invalidateQueries('todo')
      }
   })
}

export const TodoChangeMutation = ()=>{
   const queryClient = useQueryClient()
   return useMutation(TodoChange, {
      onSuccess:()=>{
         queryClient.invalidateQueries('todo')
      }
   })
}
export const TodoUpdateMutation = () => {
   const queryClient = useQueryClient()

   return useMutation(({id, inputValue}) => {
      TodoUpdate(id, inputValue)
   }, {
      onSuccess: (data) => {
         queryClient.invalidateQueries("todo")
      }
   })
}
export const TodoGetUser = () => {
   const queryClient = useQueryClient()
   return useMutation(TodoUser, {
      onSuccess: (data) => {
         queryClient.invalidateQueries("info")
      }
   })
}

export const TodoSignUpMutation = () => {
   return useMutation(TodoSignUp)
}