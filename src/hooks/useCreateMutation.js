import {useMutation, useQueryClient} from "react-query";
import Swal from "sweetalert2";
import {createCategory} from "../API/category";
import {TodoAdd} from "../API/todo";

export const useCreateMutation = () => {
   const queryClient = useQueryClient()
   return useMutation(TodoAdd, {
      onSuccess: () => {
         Swal.fire('할 일 생성', '할 일을 생성했습니다', 'success');
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
         Swal.fire('카테고리 생성', '카테고리를 생성했습니다', 'success');
         queryClient.invalidateQueries("category")
      },
      onError:(error)=>{
         Swal.fire('다시 시도해주세요', `${error}`, 'error');
      }
   })
}