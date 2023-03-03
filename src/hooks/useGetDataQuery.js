import {useQuery} from "react-query";
import {TodoGetData} from "../API/gettodoAPI";

export const useGetDataQuery = () => {
   return useQuery("todo", TodoGetData)
}