import {useMutation, useQueryClient} from "react-query";
import {deleteUser} from "../API/user";


export const useDeleteUserMutation = ()=>{
    const queryClient = useQueryClient();
    return useMutation(deleteUser, {
        onSuccess:()=>{
            queryClient.invalidateQueries('user')
        }
    })
}