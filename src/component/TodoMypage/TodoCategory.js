import * as React from "react";
import {useEffect, useState} from "react";
import {useCreateCategoryMutation} from "../../hooks/useCreateMutation";
import {useGetCategoryQuery} from "../../hooks/useGetCategoryQuery";
import {CreateCateInput, TodoListBlock} from "../common";
import {BIGBlock, Text, TodoItemBlock} from "../TodoItem/style";
import CustomPagination from "../../Custom/CustomPagination";
import CustomButton from "../../Custom/CustomButton/CustomButton";

export default function TodoCategory() {
    const { mutate: onCreateCategory } = useCreateCategoryMutation();
    const {data: categoryList} = useGetCategoryQuery();
    const [currentPage, setCurrentPage] = useState(1);
    const [startIndex, setStartIndex] = useState();
    const [endIndex, setEndIndex] = useState();
    const itemsPerPage = 5;
    const categoryData = categoryList?.data;
    const [pageCount, setPageCount] = useState(0);
    const itemsToShow = categoryData.slice(startIndex, endIndex);
    const [input, setInput] = useState("");

    const handlePageChange = (e, value) => {
        setCurrentPage(value);
    };

    const onClickCreate = ()=>{
        onCreateCategory({name:input, info: localStorage.getItem("UserId")});
    }
    const onChangeInput = (e)=>{
        setInput(e.target.value);
    }

    useEffect(() => {
        setStartIndex((currentPage - 1) * itemsPerPage);
        setEndIndex(startIndex + itemsPerPage);
        setPageCount(Math.ceil(categoryData.length / itemsPerPage));
    }, [currentPage, startIndex, endIndex, categoryData]);

    return (
        <TodoListBlock>
            <h2>카테고리 편집</h2>
            <ul>
                <BIGBlock>
                    {categoryData && categoryData.length > 0 ? (
                            itemsToShow?.map((Cate, idx) => {
                                return (
                                    <TodoItemBlock>
                                        <li key={idx}>
                                            <TodoItemBlock>
                                                <Text>
                                                    {Cate.id}
                                                </Text>
                                                <Text>
                                                    {Cate.name}
                                                </Text>
                                            </TodoItemBlock>
                                        </li>
                                    </TodoItemBlock>
                                )
                            })) :
                        (
                        <p>Loading</p>
                        )}
                </BIGBlock>
            </ul>
            <TodoItemBlock>
                <CreateCateInput onChange={onChangeInput}/>
                <CustomButton name="생성" onClick={onClickCreate}/>
            </TodoItemBlock>
            <CustomPagination
                count={pageCount}
                page={currentPage}
                onChange={handlePageChange}/>
        </TodoListBlock>

    );
};