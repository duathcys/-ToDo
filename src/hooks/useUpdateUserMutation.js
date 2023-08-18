import {useMutation, useQueryClient} from "react-query";
import {updateMyInfo} from "../API/user";

export const useUpdateUserMutation = ()=>{
    const queryClient = useQueryClient();
    return useMutation(({inputValue})=>{
        updateMyInfo({inputValue})
    }, {
        onSuccess:(data)=>{
            queryClient.invalidateQueries('use')
        }
    })
}