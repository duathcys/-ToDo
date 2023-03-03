import {useMutation} from "react-query";
import {TodoSignUp} from "../API/signupAPI";

export const useSignUpMutation = () => {
   return useMutation(TodoSignUp)
}