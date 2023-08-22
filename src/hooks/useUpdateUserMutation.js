import {useMutation, useQueryClient} from "react-query";
import {updateMyInfo} from "../API/user";
import Swal from "sweetalert2";

export const useUpdateUserMutation = ()=>{
    const queryClient = useQueryClient();
    return useMutation((inputValue)=>{
        console.log(inputValue);
        updateMyInfo(inputValue).then(res=>{
            console.log(res);})
    }, {
        onSuccess:(data)=>{
            Swal.fire('회원정보 수정', '회원정보가 수정되었습니다.', 'success');
            // localStorage.removeItem("Nickname");
            // localStorage.setItem("Nickname", data.nickname);
            console.log(data);
            queryClient.invalidateQueries('user')
        },
        onError: (err)=>{
            console.log(err);
            Swal.fire('회원정보 수정 오류', `${err}`, 'error');
    }
    })
}