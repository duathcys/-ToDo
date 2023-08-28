import {useMutation, useQueryClient} from "react-query";
import {TodoDelete} from "../API/todo";
import Swal from "sweetalert2";


export const useDeleteMutation = () => {
   const queryClient = useQueryClient()
   return useMutation(TodoDelete, {
      onSuccess:()=>{
         Swal.fire('할 일 삭제', '할 일을 삭제했습니다.', 'success');
         queryClient.invalidateQueries('todo')
            .then(res => res)
      },
      onError:(error)=>error
   })
}