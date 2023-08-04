import {useMutation, useQueryClient} from "react-query";
import {TodoDelete} from "../API/todo";


export const useDeleteMutation = () => {
   const queryClient = useQueryClient()
   return useMutation(TodoDelete, {
      onSuccess:()=>{
         queryClient.invalidateQueries('todo')
            .then(res => res)
      },
      onError:(error)=>error
   })
}