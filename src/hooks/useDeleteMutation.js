import {useMutation, useQueryClient} from "react-query";
import {TodoDelete} from "../API/deleteAPI";

export const useDeleteMutation = () => {
   const queryClient = useQueryClient()
   return useMutation(TodoDelete, {
      onSuccess:()=>{
         queryClient.invalidateQueries('todo')
      }
   })
}