import {useMutation} from "react-query";
import {doSignUpAsync} from "../API/signupAPI";
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";

export const useSignUpMutation = () => {
   const navigate = useNavigate()
   return useMutation(doSignUpAsync, {
      onSuccess:(data)=>{
         Swal.fire('회원가입 성공', '로그인 페이지로 이동합니다', 'success')
         navigate('user/login/')
      },
      onError:(error)=>{
         Swal.fire('다시 시도해주세요', `${Object.values(error.response.data)[0]}`, 'error')
      }
   })
}