import { useQuery } from "react-query";
import {getMyInfo} from "../API/user";


export const useGetMyInfoQuery = () =>{
   return useQuery("MyInfo", getMyInfo())
}