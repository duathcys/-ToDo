import {getMyInfo} from "../../API/getMyInfoAPI";
import {FindForm} from "./style";


function TodoFindInfo() {
    const {data} = getMyInfo()

    return (
        <FindForm>
            아이디 & 비밀번호 찾기
        </FindForm>

    );
}

export default TodoFindInfo;
