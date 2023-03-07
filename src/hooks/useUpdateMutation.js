import {useMutation, useQueryClient} from "react-query";
import {TodoUpdate} from "../API/updateAPI";
import Swal from "sweetalert2";

export const useUpdateMutation = () => {
   const queryClient = useQueryClient()
   return useMutation(({id, inputValue}) => {
      TodoUpdate(id, inputValue)
   }, {
      onSuccess: (data) => {
         queryClient.invalidateQueries("todo")
      },
      onError:(error)=>{
         Swal.fire('다시 시도해주세요', `${error}`, 'error');
      }
   })
}