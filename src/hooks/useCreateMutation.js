import {useMutation, useQueryClient} from "react-query";
import Swal from "sweetalert2";
import {createCategory} from "../API/category";
import {TodoAdd} from "../API/todo";

export const useCreateMutation = () => {
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

export const useCreateCategoryMutation = ()=>{
   const queryClient = useQueryClient();
   return useMutation(createCategory, {
      onSuccess:()=>{
         queryClient.invalidateQueries("category")
      },
      onError:(error)=>{
         Swal.fire('다시 시도해주세요', `${error}`, 'error');
      }
   })
}