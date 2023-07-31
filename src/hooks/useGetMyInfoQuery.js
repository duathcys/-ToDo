import { getMyInfo } from "../API/getMyInfoAPI";
import { useQuery } from "react-query";


export const useGetMyInfoQuery = () =>{
   return useQuery("MyInfo", getMyInfo())
}