import {useGetMyInfoQuery} from "../../hooks/useGetMyInfoQuery";
import {TodoMyPageBlock, TodoMypageHead} from "./style";


function TodoMypage(){
    const {isLoading, data}=useGetMyInfoQuery();

    return(
        <TodoMyPageBlock>
            <TodoMypageHead>
                <h1>
                    마이페이지
                </h1>
                <h2>
                    {localStorage.getItem("UserId")}님
                </h2>
            </TodoMypageHead>
            <ul>
                <li>
                    Total :
                    {localStorage.getItem("Total")} 개
                </li>
                <li>
                    Left :
                    {localStorage.getItem("Left")} 개
                </li>
                <li>
                    회원 정보 수정
                </li>
                <li>
                    아바타 꾸미기
                </li>
            </ul>
        </TodoMyPageBlock>
    )

}

export default TodoMypage;