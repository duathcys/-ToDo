import {useMutation} from "react-query";
import {useNavigate} from "react-router-dom";
import {doLoginAsync} from "../API/loginAPI";

export const useLoginMutation = (inputId) => {
   const navigate = useNavigate();
   return useMutation(doLoginAsync, {
      onSuccess: (data) => {
         localStorage.setItem("UserId", inputId);
         navigate(`/todo/list/?info=${inputId}`)
      },
      onError: (error) => {
         alert(Object.values(error.response.data)[0])
      }
   })
}