import {useMutation, useQueryClient} from "react-query";
import {TodoAdd} from "../API/createAPI";
import Swal from "sweetalert2";

export const useCreateMutation = (newTodo) => {
   const queryClient = useQueryClient()
   return useMutation(TodoAdd, {
      onSuccess: () => {
         queryClient.invalidateQueries("todo")
      },
      onError:(error)=>{
         Swal.fire('다시 시도해주세요', `${error}`, 'error');
      }
   })
}