import { TextField } from "@mui/material";
import { useGetMyInfoQuery } from "../../hooks/useGetMyInfoQuery";
import { useGetDataQuery } from "../../hooks/useGetDataQuery";


function TodoMypage(){
   const {isLoading, data}=useGetMyInfoQuery();

   return(
      <>
         <h1>
            마이페이지
         </h1>
         <h2>
            {localStorage.getItem("UserId")}님
            {data?.params.userid}님
         </h2>
         <ul>
            <li>
               Total :
               {/*총 할일 : ${TodoData?.TodoData.length}*/}
            </li>
            <li>
               Left :
               {/*남은 할일 : ${data?.data.filter((todo)=> todo.done == false).length}*/}
            </li>
            <li>
               회원 정보 수정
            </li>
         </ul>
      </>
   )

}

export default TodoMypage;