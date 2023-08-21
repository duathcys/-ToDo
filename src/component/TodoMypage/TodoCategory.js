import {Text} from "../TodoItem/style";
import {Divider, TextField} from "@mui/material";
import * as React from "react";
import {useCreateCategoryMutation} from "../../hooks/useCreateMutation";
import {useGetCategoryQuery} from "../../hooks/useGetCategoryQuery";
import {useEffect, useState} from "react";
import {TodoListBlock} from "../common";
import {TextBlock} from "./style";

export default function TodoCategory() {
    const {isLoading, data} = useGetCategoryQuery();
    const [newCat, setNewCat] = useState({name: ""});
    const {mutate: onCreateCategory, isLoading2} = useCreateCategoryMutation(newCat);
    const [category, setCategory] = useState("");

    const categoryList = JSON.parse(localStorage.getItem('categoryList'))

    const handleCategory = (e) => {
        setCategory(e.target.value);
    }
    const onCreate = () => {
        categoryList.push(newCat);
        JSON.stringify(categoryList);
        onCreateCategory(newCat);
        setCategory('');
        setNewCat({name: ""});
    }

    useEffect(() => {
        setNewCat({name: category});
    })
    return (
        <TodoListBlock>
            <h2>카테고리 편집</h2>
            <TextBlock>
            {
                data?.data.map((Cat, idx) => {
                    return (
                        <h4>{Cat.name}</h4>
                    )
                })
            }
            <TextField value={category} onChange={handleCategory} variant="standard"/>
            <button onClick={onCreate}>생성</button>
            {/*<Divider/>*/}
        </TextBlock>
        </TodoListBlock>
        )
};