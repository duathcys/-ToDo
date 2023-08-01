import {useGetMyInfoQuery} from "../../hooks/useGetMyInfoQuery";
import {TodoHeadBlock, TodoTemplateBlock} from "../common";


function TodoMypage(){
    const {isLoading, data}=useGetMyInfoQuery();

    return(
        <TodoTemplateBlock>
            <TodoHeadBlock>
                <h1>
                    My Page
                </h1>
                <div className="detail">
                    {localStorage.getItem("UserId")}님
                </div>
            </TodoHeadBlock>
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
        </TodoTemplateBlock>
    )

}

export default TodoMypage;