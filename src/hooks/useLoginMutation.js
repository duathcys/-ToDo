import {useMutation} from "react-query";
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import {doLoginAsync} from "../API/user";
export const useLoginMutation = (inputId) => {
   const navigate = useNavigate();
   return useMutation(doLoginAsync, {
      onSuccess: (data) => {
         localStorage.setItem("UserId", inputId);
         Swal.fire('로그인 성공', `${inputId}님 로그인에 성공하셨습니다`, 'success')
         navigate(`/todo/list/?info=${inputId}`)
      },
      onError: (error) => {
         Swal.fire('다시 시도해주세요',`${Object.values(error.response.data)[0]}`, 'error')
      }
   })
}