import { TextField } from "@mui/material";
import { useGetMyInfoQuery } from "../../hooks/useGetMyInfoQuery";


function TodoMypage(){
   const {isLoading, data}=useGetMyInfoQuery();
   console.log(data);




   return(
      <>
         <h1>
            마이페이지
         </h1>
         <h2>
            {data?.params.userid}님
         </h2>
         <ul>
            <li>
               총 할일 :
            </li>
            <li>
               남은 할일 :
            </li>
            <li>
               회원 정보 수정
            </li>
         </ul>
      </>
   )

}

export default TodoMypage;