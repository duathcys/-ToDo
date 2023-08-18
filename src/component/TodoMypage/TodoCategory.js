import {Text} from "../TodoItem/style";
import {Divider, TextField} from "@mui/material";
import * as React from "react";
import {useCreateCategoryMutation} from "../../hooks/useCreateMutation";
import {useGetCategoryQuery} from "../../hooks/useGetCategoryQuery";
import {useEffect, useState} from "react";

export default function TodoCategory() {
    const {mutate: onCreateCategory, isLoading2} = useCreateCategoryMutation(newCat);
    const {isLoading, data} = useGetCategoryQuery();
    const [newCat, setNewCat] = useState({name: "", priority: 0});
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
        setNewCat({name: "", priority: 0});
    }

    useEffect(() => {
        setNewCat({name: category, priority: 0});
    })
    return (
        <>
            <h2>카테고리 편집</h2>
            {
                data?.data.map((Cat, idx) => {
                    return (
                        <li key={idx}>
                            <div style={{display: "flex", flexDirection: "row"}}>
                                <Text>{Cat.name}</Text>
                                <Text>{Cat.priority}</Text>
                            </div>
                        </li>
                    )
                })
            }
            <TextField value={category} onChange={handleCategory} variant="standard"/>
            <button onClick={onCreate}>생성</button>
            <Divider/>
        </>

)
};