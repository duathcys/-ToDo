import {useMutation, useQueryClient} from "react-query";
import {TodoCheckUpdate, TodoUpdate} from "../API/todo";
import Swal from "sweetalert2";


export const useUpdateMutation = () => {
   const queryClient = useQueryClient()
   return useMutation(({id, inputValue}) => {
      TodoUpdate(id, inputValue)
   }, {
      onSuccess: (data) => {
         Swal.fire('할 일 수정', '할 일을 수정했습니다.', 'success');
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