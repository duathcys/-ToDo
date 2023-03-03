import {useMutation, useQueryClient} from "react-query";
import {TodoAdd} from "../API/createAPI";

export const useCreateMutation = () => {
   const queryClient = useQueryClient()
   return useMutation(TodoAdd, {
      onSuccess: () => {
         queryClient.invalidateQueries("todo")
      }
   })
}