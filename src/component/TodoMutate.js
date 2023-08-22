import {useMutation, useQuery, useQueryClient} from "react-query";
import axios from "axios";

const TodoChange = (id)=>{
   return axios.put(`http://localhost:8000/todo/list/${id}`)
      .then(res => res)
}

const TodoInfo = () => {
   return axios.get('http://localhost:8000/user/login/')
}

export const TodoInfoData = () => {
   return useQuery("info", TodoInfo)
}

export const TodoChangeMutation = ()=>{
   const queryClient = useQueryClient()
   return useMutation(TodoChange, {
      onSuccess:()=>{
         queryClient.invalidateQueries('todo')
      }
   })
}