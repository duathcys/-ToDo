import {useMutation, useQueryClient} from "react-query";
import {TodoDelete} from "../API/deleteAPI";
import Swal from "sweetalert2";

export const useDeleteMutation = () => {
   const queryClient = useQueryClient()
   return useMutation(TodoDelete, {
      onSuccess:()=>{
         queryClient.invalidateQueries('todo')
      },
      onError:(error)=> {
         Swal.fire('다시 시도해주세요', `${error}`, 'error');
      }
   })
}