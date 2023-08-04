import {useMutation, useQueryClient} from "react-query";
import {TodoCheckUpdate, TodoUpdate} from "../API/todo";


export const useUpdateMutation = () => {
   const queryClient = useQueryClient()
   return useMutation(({id, inputValue}) => {
      TodoUpdate(id, inputValue)
   }, {
      onSuccess: (data) => {
         queryClient.invalidateQueries("todo")
            .then(res => res)
      },
      onError:(error)=>error
   })
}

export const useCheckUpdateMutation = () => {
   const queryClient = useQueryClient()
   return useMutation(({id, done}) => {
      TodoCheckUpdate(id, {done})
   }, {
      onSuccess: (data) => {
         queryClient.invalidateQueries('todo')
            .then(res => res)
      },
      onError:(error)=>error
   })
}