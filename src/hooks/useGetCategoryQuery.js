import {useQuery} from "react-query";
import {getCategoryList} from "../API/category";


export const useGetCategoryQuery = ()=>{
    return useQuery("category", getCategoryList)
}