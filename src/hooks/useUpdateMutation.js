import {useMutation, useQueryClient} from "react-query";
import {TodoUpdate} from "../API/updateAPI";

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