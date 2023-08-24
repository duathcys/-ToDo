import * as React from "react";
import {useEffect, useState} from "react";
import {useCreateCategoryMutation} from "../../hooks/useCreateMutation";
import {useGetCategoryQuery} from "../../hooks/useGetCategoryQuery";
import {TodoListBlock} from "../common";
import * as PropTypes from "prop-types";
import {BIGBlock, Text, TodoItemBlock} from "../TodoItem/style";
import CustomPagination from "../../Custom/CustomPagination";

export default function TodoCategory() {
    const { mutate: onCreateCategory } = useCreateCategoryMutation();
    const {data: categoryList} = useGetCategoryQuery();
    // const [rowsPerPage, setRowsPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const [startIndex, setStartIndex] = useState();
    const [endIndex, setEndIndex] = useState();
    const itemsPerPage = 5;
    const [pageCount, setPageCount] = useState(0);
    const itemsToShow = categoryList?.data.slice(startIndex, endIndex);


    const handlePageChange = (e, value) => {
        setCurrentPage(value);
    };

    useEffect(() => {
        setStartIndex((currentPage - 1) * itemsPerPage);
        setEndIndex(startIndex + itemsPerPage);
        console.log(startIndex, endIndex, currentPage);
        console.log(currentPage);
        setPageCount(Math.ceil(categoryList?.data.length / itemsPerPage));
    }, [currentPage, startIndex, endIndex]);

    return (
        <TodoListBlock>
            <h2>카테고리 편집</h2>
            <ul>
                <BIGBlock>
                    {itemsToShow?.map((Cate, idx)=>{
                        return(
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
                    })}
                </BIGBlock>
            </ul>
            <CustomPagination
                count={pageCount}
                page={currentPage}
                onChange={handlePageChange}/>
        </TodoListBlock>

    );
};