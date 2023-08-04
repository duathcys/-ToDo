import {useQuery} from "react-query";
import {TodoGetData} from "../API/todo";


export const useGetDataQuery = () => {
   return useQuery("todo" , TodoGetData)
}