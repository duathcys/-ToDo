import {TextField} from "@mui/material";
import * as React from "react";
import {useState} from "react";
import {useCreateCategoryMutation} from "../../hooks/useCreateMutation";
import {useGetCategoryQuery} from "../../hooks/useGetCategoryQuery";
import {TodoListBlock} from "../common";
import {TextBlock} from "./style";

export default function TodoCategory() {
    const { mutate: onCreateCategory } = useCreateCategoryMutation();
    const [category, setCategory] = useState("");
    const {data:categoryList} = useGetCategoryQuery();

    const handleCategory = (e) => {
        setCategory(e.target.value)
    }
    const onCreate = () => {
        onCreateCategory({name: category});
        setCategory('');
    }


    return (
        <TodoListBlock>
            <h2>카테고리 편집</h2>
            <TextBlock>
            {
                categoryList?.data.map((Cat, idx) => {
                    return (
                        <h4>{Cat.name}</h4>
                    )
                })
            }
            <TextField value={category} onChange={handleCategory} variant="standard"/>
            <button onClick={onCreate}>생성</button>
        </TextBlock>
        </TodoListBlock>
        )
};